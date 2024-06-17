<template>
    <div class="home">
    
      <h1 class="title">欢迎来到技术教育前沿</h1>
      <p class="description">
        在这里，我们相信技术是教育变革的关键。我们致力于探索和分享如何通过创新的编程和软件开发技术来提升学习体验。
      </p>
      <div class="features">
        <div class="feature">
          <h2>探索编程世界</h2>
          <p>无论你是编程初学者还是经验丰富的开发者，我们的网站都将为你提供丰富的资源，包括基础教程、进阶课程和实践项目，让你在编程的道路上不断进步。</p>
        </div>
        <div class="feature">
          <h2>学生作品展示</h2>
          <p>我们鼓励学生将他们的编程项目分享到我们的平台。这里，每个人的创意和努力都将得到展示和认可。</p>
        </div>
        <div class="feature">
          <h2>最新动态</h2>
          <p>保持更新，了解技术教育领域的最新发展和动态。我们的新闻页面将为你提供最新的信息和见解。</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
  }
  </script>
  
  <style scoped>
  /* 样式可以根据您的需求进行调整 */
  .home {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  .title {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #333;
  }
  
  .description {
    font-size: 16px;
    margin-bottom: 40px;
    color: #666;
  }
  
  .features {
    display: flex;
    justify-content: space-between;
  }
  
  .feature {
    flex: 1;
    margin-right: 40px; /* 增加了元素之间的间距 */
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  </style>
  