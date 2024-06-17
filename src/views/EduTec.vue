<template>
  <div class="education">
    <h2 class="section-title">教育技术</h2>
    <p class="description">
      技术在教育领域的应用日益广泛。以下是一些教育技术的关键点：
    </p>
    <div class="tech-list">
      <div class="tech-item">
        <div class="image-container">
        <img src="../assets/images/edu-2.png" alt="EdTech Image 5" class="edtech-image" />
      </div>
        <p>在线学习平台：通过Web应用或移动应用提供在线课程、教材和练习。</p>
      </div>
      <div class="tech-item">
        <div class="image-container">
        <img src="../assets/images/edu-3.jpg" alt="EdTech Image 5" class="edtech-image" />
      </div>
        <p>虚拟现实（VR）和增强现实（AR）：为学生创造沉浸式的学习体验。</p>
      </div>
      <div class="tech-item">
        <div class="image-container">
        <img src="../assets/images/edu-4.jpg" alt="EdTech Image 5" class="edtech-image" />
      </div>
        <p>自适应学习系统：根据学生的学习进度和需求调整教学内容。</p>
      </div>
      <div class="tech-item">
        <div class="image-container">
        <img src="../assets/images/edu-5.jpg" alt="EdTech Image 5" class="edtech-image" />
      </div>
        <p>数据分析和学习分析：利用数据来改进教学和学生表现。</p>
      </div>
      <div class="tech-item">
        <div class="image-container">
        <img src="../assets/images/edu-6.png" alt="EdTech Image 5" class="edtech-image" />
      </div>
        <p>远程教育：通过视频会议、在线讨论等方式实现远程教学。</p>
      </div>
      <div class="tech-item">
        <div class="image-container">
        <img src="../assets/images/edu-7.jpg" alt="EdTech Image 5" class="edtech-image" />
      </div>
        <p>智能教材：基于学生的知识水平和进度，AI可以推荐适合的教材和资源</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Education',
}
</script>

<style scoped>
/* 样式可以根据您的需求进行调整 */
.education {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.section-title {
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

.description {
  font-size: 16px;
  margin-bottom: 30px;
  color: #666;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.tech-item {
  flex: 1;
  max-width: 300px;
}

.image-container {
  width: 200px; /* Set the desired square size */
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.edtech-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
