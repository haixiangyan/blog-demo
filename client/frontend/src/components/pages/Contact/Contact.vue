<template>
    <div class="contact-page">
        <div class="contact-container light-blue-bg">
          <div class="contact-wrapper max-container">
            <p class="contact-title">CONTACT</p>

            <img class="contact-img" :src="contactIntro.introImg" alt="Contact image">

            <p >Be in touch</p>

            <div class="intro-content normal-font-color pharagraph-font">
              {{contactIntro.introContent}}
            </div>

            <form class="contact-form">
              <blog-input name="name" :required="true" @validation="handleValidation" v-model="contactForm.name" class="input-item" placeholder="Name"></blog-input>
              <blog-input name="email" :required="true" @validation="handleValidation" v-model="contactForm.email" type="email" class="input-item" placeholder="Email"></blog-input>
              <blog-input name="subject" :required="true" @validation="handleValidation" v-model="contactForm.subject" class="input-item" placeholder="Subject"></blog-input>

              <blog-textarea name="message" @validation="handleValidation" :required="true" v-model="contactForm.message" class="input-item" placeholder="Message" :rows="5"></blog-textarea>
            </form>

            <blog-primary-btn :click="send" title="Send"></blog-primary-btn>
          </div>
        </div>
    </div>
</template>

<script>
import BlogInput from '@/components/common/Form/Input/Input';
import BlogTextarea from '@/components/common/Form/TextArea/TextArea';
import BlogPrimaryBtn from '@/components/common/Btn/PrimaryBtn/PrimaryBtn';

export default {
  name: "about",

  data() {
    return {
      contactIntro: {
        introImg: '/static/img/contact/contact.jpg',
        introContent: `Want to give some suggestion to me? Fill in the form and hit the Send button to let me know your awesome ideas. I'll try all my best to improve my blog :)`
      },
      contactForm: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      formValidation: {
        name: false,
        email: false,
        subject: false,
        message: false
      }
    };
  },

  components: {
    BlogInput: BlogInput,
    BlogTextarea: BlogTextarea,
    BlogPrimaryBtn: BlogPrimaryBtn
  },

  methods: {
    // Method to validate the form data
    validateForm() {
      // Iterate values of formValidation
      for (let value of Object.values(this.formValidation)) {
        if (!value) {
          this.$store.commit("trigger", {
            title: 'Please fill in the form correctly',
            type: "warning"
          });
          return false;
        }
      }
      
      return true;
    },

    // send contact information to backend
    send() {
      if (!this.validateForm()) {
        console.error('In valid form');
        return ;
      }

      this.$axios({
        method: 'post',
        url: '/contact',
        data: {
          contactForm: this.contactForm
        }
      })
      .then((response) => {
        let data = response.data;
        if(data.type === 'success') {
          this.$store.commit("trigger", {
            title: `Thank you for sending me your suggestion :)`,
            type: "success"
          });
        }
        else {
          this.$store.commit("trigger", {
            title: data.errorMsg ? data.errorMsg : 'OFF~ Something goes wrong :(',
            type: "danger"
          });
        }
      })
    },

    // Handle validation of different input boxes
    handleValidation(name, isValid) {
      this.formValidation[name] = isValid;
    }
  }
}
</script>

<style scoped>
@media screen and (min-width: 640px) {
  .contact-container {
    margin-top: 180px;
  }
}

@media screen and (max-width: 640px) {
  .contact-container {
    margin-top: 80px;
  }
}

.contact-wrapper {
  padding: 60px 0;
  text-align: center;
}

/* contact image style */
.contact-img {
  text-align: center;
  margin: 30px 0;
  max-width: 80%;
}

/* contact title style */
.contact-container p {
  font-size: 2em;
  font-family: "libre baskerville", serif;
}

.contact-title {
  letter-spacing: 0.2em;
}

/* intro content style */
.intro-content {
  max-width: 80%;
  margin: 10px auto;
  text-align: center;
}

/* contact form style */
.contact-form {
  text-align: left;
}

/* input item style */
.input-item {
  margin: 0 auto;
  width: 470px;
}
</style>
