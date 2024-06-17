<script setup>
import HelloWorld from './components/HelloWorld.vue'
import router from './router';
import Home from './views/Home.vue'
</script>

<template>
  <div>
    <nav class="navStyle">
      <router-link to="/">
        首页
      </router-link>

      <router-link to="/EduTec">
        教育技术
      </router-link>

      <router-link to="/protut">
        编程教育
      </router-link>
      
      <router-link to="/news">
        新闻动态
      </router-link>

      <router-link to="/guanyu">
        关于我们
      </router-link>

      <router-link to="/lianxi">
        联系方式
      </router-link>


    </nav>
    <router-view>
    </router-view>
  </div>
</template>

<style scoped>
.navStyle {
  border: 2px solid #00008b;
  border-radius: 50px;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  gap: 30px;
}
</style>
