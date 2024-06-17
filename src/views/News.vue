<template>
    <div>
      <h1>教育科技新闻动态</h1>
      <div v-for="news in newsList" :key="news.url">
        <h2>{{ news.title }}</h2>
        <p>{{ news.snippets }}</p>
        <a :href="news.url" target="_blank">阅读更多</a>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const newsList = ref([
    // 在这里插入从搜索结果中获取的新闻数据
    {
      title: "松鼠Ai上榜《时代》全球顶尖教育科技公司榜单，驱动教育科技高质量发展",
      snippets: "作为成立于2014年的教育科技企业...",
      url: "https://new.qq.com/rain/a/20240614A07NW700"
    },
    // ... 其他新闻项
  ]);
  
  </script>
  
  <style scoped>
  /* 在这里添加CSS样式 */
  </style>
  