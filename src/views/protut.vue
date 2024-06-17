<template>
    <div class="education">
        <h2 class="section-title">编程教育</h2>
        <p class="description">
            AAAAAA
        </p>
        <div class="LeftAndRight">
            <div class="tech-list">
                <div class="tech-item" v-for="video in videos" :key="video.id">
                    <a :href="video.link">
                        <div class="image-container">
                            <img :src="'/covers/' + video.imageName" alt="EdTech Image 5" class="edtech-image" />
                        </div>
                        <p>{{ video.title }}</p>
                    </a>
                    <el-button type="primary" @click="addToFavorite(video)">
                        添加到收藏夹<el-icon class="el-icon--right">
                            <Star />
                        </el-icon>
                    </el-button>

                </div>

            </div>
            <div class="Right">
                <h1 class="smallFont">
                    收藏夹
                </h1>
                <div class="favorite-list" v-if="favoriteVideos.length !== 0">
                    <div class="tech-item" v-for="(video,index) in favoriteVideos" :key="video.id">
                        <a :href="video.link" class="noColor">
                            <div class="image-container">
                                <img :src="'/covers/' + video.imageName" alt="EdTech Image 5" class="edtech-image" />
                            </div>
                            <p class="whiteText">{{ video.title }}</p>
                        </a>
                        <el-button type="danger" @click="removeFavorite(index)">
                        删除<el-icon class="el-icon--right">
                            <Delete />
                        </el-icon>
                    </el-button>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue'
import { useVideoStore } from "../store/videoStore.js"


const videos = useVideoStore().allVideos


const favoriteVideos = useVideoStore().favoriteVideos
const addToFavorite = (video) => {
    favoriteVideos.push(video)
}

const removeFavorite = (index) => {
    favoriteVideos.splice(index,1)
}

</script>

<style scoped>
.whiteText {
    color: white;
    text-shadow: 2px 2px 3px #888888;
}
.noColor {
    color: inherit;
    text-decoration: none;
}
/* 样式可以根据您的需求进行调整 */
.education {
    /* max-width: 800px; */
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
}

.Right {
    width: 30%;

}

.smallFont {
    font-size: medium;
}

.LeftAndRight {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 50px;
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

.favorite-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
    padding: 50px;
    border-radius: 30px;
    background-color:rgb(147, 203, 227) ;
}

.tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 70%;
    margin-bottom: auto;
}

.tech-item {
    align-items: center;
    flex: 1;
    max-width: 300px;
}

.image-container {
    width: 200px;
    /* Set the desired square size */
    height: 112.5px;
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