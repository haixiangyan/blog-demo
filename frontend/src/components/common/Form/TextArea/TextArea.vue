<template>
  <div class="textarea-container">
    <div :class="['textarea-box', {'in-valid': !isValid}]">
      <textarea :style="{ width: flexWidth }" 
            :value="textareaValue" 
            :placeholder="placeholder" 
            :rows="rows"
            @input="handleTextarea">
      </textarea>
    </div>
    <div class="textarea-tips">
      <p v-show="!isValid" class="danger-font-color">Please fill in a valid email address</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    required: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: ''
    },
    rows: {
      type: Number,
      default: 2
    },
    value: [String, Number],
    placeholder: [String],
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
      // Initialize textarea value
      textareaValue: this.value,
      // Define is validate
      isValid: this.initValid,
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

  watch: {
    textareaValue(newValue) {
      if(this.required) {
        if(!newValue) {
          this.isValid = false;
          this.inValidMsg = `Shouldn't be empty.`
        }
        else {
          this.isValid = true;
          this.inValidMsg = ``
        }
      }

      this.$emit('validation', this.name, this.isValid);
    }
  },

  methods: {
    handleTextarea() {
      // Get value of chaning value event of textarea
      const value = event.target.value;
      // Pass value to textareaValue of this component
      this.textareaValue = value;
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
}
</script>

<style scoped>
@media screen and (max-width: 640px) {
  .textarea-container {
    width: 100%;
  }
}

/* textarea container */
.textarea-box {
  padding: 11px;
  background: white;
  border: 1px solid black;
}

.textarea-box textarea {
  outline: none;
  border: none;
  font-size: 1em;
}

/* textarea tips styles */
.textarea-tips {
  padding: 7px 0;
  background: inherit;
}

.textarea-tips p {
  font-size: .7em;
}

/* invalid style */
.in-valid {
  border: 2px solid #F56C6C;
}
</style>