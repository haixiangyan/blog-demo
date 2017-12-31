<template>
  <div class="input-container">
    <div :class="['input-box', {'in-valid': !isValid}]">
      <input :style="{ width: flexWidth }" 
            :type="type" :value="inputValue" 
            :placeholder="placeholder" 
            @input="handleInput">
    </div>
    <div class="input-tips">
      <p v-show="!isValid" class="danger-font-color">{{inValidMsg}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    required: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 100
    },
    initValid: {
      type: Boolean,
      default: true,
    }
  },

  data() {
    return {
      // Initialize input value
      inputValue: this.value,
      // Define is validate
      isValid: this.initValid,
      // Invalid message
      inValidMsg: ''
    };
  },

  computed: {
    flexWidth() {
      if (this.width <= 100)  {
        return `${this.width}%`;
      }
      else if (document.body.clientWidth > this.width) {
        return `${this.width}px`;
      }
      else {
        return `90%`;
      }
    }
  },

  methods: {
    handleInput() {
      // Get value of chaning value event of input
      const value = event.target.value;
      // Pass value to inputValue of this component
      this.inputValue = value;
      // Pass value to parent component
      this.$emit('input', value);
    },
    validateEmail(text) {
      // Define email regular expression
      let emailExp = /^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/i;
      // Return whether text matches email regular expression
      return emailExp.test(text);
    }
  },

  watch: {
    // Watch inputValue to validate input
    inputValue(newValue) {
      // check required validation
      if(this.required) {
        if(!newValue) {
          this.isValid = false;
          this.inValidMsg = `Shouldn't be empty. `
        }
        else {
          this.isValid = true;
          this.inValidMsg = ``
        }
      }

      // Check different type validation
      switch(this.type) {
        case 'email':
          this.isValid = this.validateEmail(newValue);
          this.inValidMsg = 'Please fill in valid email address.'
          break;
        default:
      }

      // Pass isValid value to parent component
      this.$emit('validation', this.name, this.isValid);
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 640px) {
  .input-container {
    width: 100%;
  }
}

/* input container */
.input-box {
  padding: 11px;
  background: white;
  border: 1px solid black;
}

.input-box input {
  outline: none;
  border: none;
  font-size: 1em;
}

/* input tips styles */
.input-tips {
  padding: 7px 0;
  background: inherit;
}

.input-tips p {
  font-size: .7em;
}

/* invalid style */
.in-valid {
  border: 2px solid #F56C6C;
}
</style>

