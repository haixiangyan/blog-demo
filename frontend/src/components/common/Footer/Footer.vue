<template>
  <div class="footer-container">
    <div class="max-container">
      <!-- Join title -->
      <p class="join-title">Join me mailing list Never miss an update</p>

      <!-- subscribe -->
      <div class="subscribe">
        <!-- input box -->
        <blog-input class="subscribe-input" v-model="email" type="email" placeholder="Email Address" :width="450"></blog-input>
        
        <!-- scribe button -->
        <blog-outline-primary-btn :click="subscribe" link="" class="subscribe-btn" title="Subscribe"></blog-outline-primary-btn>
      </div>

      <!-- social part -->
      <blog-social class="social-comp"></blog-social>
    </div>

    <!-- brand -->
    <div class="brand">
      	&copy; 2017 by Haixiang Yan.
    </div>
  </div>
</template>

<script>
import BlogSoical from "@/components/common/Social/Social";
import BlogInput from "@/components/common/Form/Input/Input";
import BlogOutlinePrimaryBtn from "@/components/common/Btn/PrimaryBtn/OutlinePrimaryBtn";

export default {
  data() {
    return {
      email: ''
    };
  },
  components: {
    'BlogSocial': BlogSoical,
    'BlogInput': BlogInput,
    'BlogOutlinePrimaryBtn': BlogOutlinePrimaryBtn,
  },
  methods: {
    subscribe() {
      console.log('Subscribe')
    }
  }
};
</script>

<style scoped>
.footer-container {
  padding: 50px 0 0;
  background: black;
}

/* join title style */
.join-title {
  text-align: center;
  color: white;
  font-size: 2em;
  line-height: 1.4em;
  font-family: "libre baskerville", serif;
}

/* subscribe */
.subscribe {
  margin: 30px 0 60px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.subscribe-btn,
.subscribe-input {
  margin: 10px;
}

/* social component style */
.social-comp {
  margin: 30px auto;
}

/* brand style */
.brand {
  padding: 5px;
  text-align: center;
  font-size: .9em;
  color: #A0A09F;
  background: #2f2e2e;
}
</style>
