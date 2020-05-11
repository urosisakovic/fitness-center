<template>
    <div>
        <app-sidebar></app-sidebar>
        <div id="content">
        <h1>{{content}}</h1>
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
    }
}
</script>