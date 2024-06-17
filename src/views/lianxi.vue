<template>
  <div class="contact-page">
    <h1>联系方式</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">姓名:</label>
        <input type="text" id="name" v-model="contact.name" required>
      </div>
      <div class="form-group">
        <label for="email">邮箱:</label>
        <input type="email" id="email" v-model="contact.email" required>
      </div>
      <div class="form-group">
        <label for="message">留言:</label>
        <textarea id="message" v-model="contact.message" required></textarea>
      </div>
      <button type="submit">发送</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const contact = ref({
  name: '',
  email: '',
  message: ''
});

const submitForm = () => {
  alert("感谢您的反馈!"
  )
};
</script>

<style scoped>
/* 在这里添加CSS样式 */
.contact-page {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}
.contact-page .form-group {
  margin-bottom: 20px;
}
.contact-page label {
  display: block;
}
.contact-page input,
.contact-page textarea {
  width: 100%;
  padding: 10px;
}
.contact-page button {
  padding: 10px 20px;
}
</style>
