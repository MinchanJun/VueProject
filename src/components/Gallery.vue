<template>
    <div class="gallery">
        <h2>{{ title }}</h2>
        <div v-for="(image, i) in images" :key="i">
            <img :src="require(`../assets/${image.imageName}`)" alt="">
            <!-- <p>Photo taken by: <a :href="image.photographerLink">{{ image.photographerName }}</a>
            </p> -->
            <Photographer :name="image.photographerName"  :link="image.photographerLink"/>
        </div>
    </div>
</template>

<script>

import Photographer from './Photographer.vue'

export default {
    props: {
        title: {
            type: String,
            required: true
        }
    },
    components: {
        Photographer        
    },
    data() {
        return {
            images: [
                {
                    imageName: '1.png',
                    URL: "https://google.com",
                    photographerLink: "https://youtube.com",
                    photographerName: '1',
                },
                {
                    imageName: '2.png',
                    URL: "https://google.com",
                    photographerLink: "https://youtube.com",
                    photographerName: '2',
                }
            ]
        }
    }
}
</script>