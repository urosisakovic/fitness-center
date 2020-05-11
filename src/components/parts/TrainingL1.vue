<template>
    <div id="content">
        <h1>{{pageContent.title}}</h1>
        <h1>{{pageContent.text}}</h1>
    </div>
</template>

<script>
export default {
    props: {
        pageContent: {
            require: true
        }
    },
    data() {
    }
}
</script>