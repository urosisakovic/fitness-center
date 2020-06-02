<template>
    <div id="wrapper">
        <app-sidebar></app-sidebar>
        
        <div id="content">
            <h1>{{content.name}} </h1>
            <p> {{content.desc}} </p>
            <p> Duration: {{content.duration}}min </p>
            <p> Difficulty: {{content.diff}} </p>
            <p> Average user mark: {{content.avg_mark}} </p>

            <h1>Images</h1>
            <p v-for="image in content.images" :key="image.id">
                {{image.file}}
                <img :src="getImgUrl(image)">
            </p>

            <h1>Videos</h1>
            <p v-for="video in content.videos" :key="video.id">
                {{video.ogg}}
            </p>

            <h1>Comments</h1>
            <p v-for="comment in content.comments" :key="comment.id">
                {{comment.author}}<br />
                {{comment.text}}<br />
                {{comment.date}}
            </p>
        </div>
    </div>
</template>

<script>
import Sidebar from '../parts/Sidebar.vue'

export default {
    components: {
    'app-sidebar': Sidebar
    },
    data() {
        return {
        }
    },
    props: {
        content: {
            required: true
        }
    },
    methods: {
        getImgUrl: function(pic) {
            return require('../../assets/images/' + pic.file)
        }
    }
}
</script>