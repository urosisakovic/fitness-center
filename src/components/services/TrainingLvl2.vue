<template>
    <div id="wrapper">
        <app-sidebar></app-sidebar>
        
        <div class="container" id="content">
            <h1>{{content.name}} </h1>
            <p> {{content.desc}} </p>

            <div class="row">
                <h4 class="col-xl-4"> Duration: {{content.duration}} minutes </h4>
                <h4 class="col-xl-4"> Difficulty: {{content.diff}} </h4>
                <h4 class="col-xl-4"> Average user mark: {{content.avg_mark}} </h4>
            </div>

            <!--Gallery-->
            <div id="multi-item-example" class="carousel slide carousel-multi-item carousel-multi-item-2" data-ride="carousel">

                <div class="controls-top">
                    <a class="control-button" href="#multi-item-example" data-slide="prev"><i>&lt;</i></a>
                    <a class="control-button" href="#multi-item-example" data-slide="next"><i>&gt;</i></a>
                </div>

                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                        <div class="col-md-3 mb-3" v-for="image in content.images" :key="image.id">
                            <div class="card">
                            <img class="img-fluid" :src="getImgUrl(image)">
                                alt="Card image cap">
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="col-md-3 mb-3" v-for="image in content.images" :key="image.id">
                            <div class="card">
                            <img class="img-fluid" :src="getImgUrl(image)">
                                alt="Card image cap">
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <!--/Gallery-->

            <div :key="refreshComments">
                <h2>Comments</h2>
                <article v-for="comment in content.comments" :key="comment.id" class="media content-section">
                    <div class="media-body">
                    <div class="article-metadata">
                        <small class="text-muted">{{comment.date}}</small>
                    </div>
                    <h2 class="article-title">{{comment.author}}</h2>
                    <p class="article-content">{{comment.text}}</p>
                    </div>
                </article>
            </div>

            <div class="form-group">
                <textarea class="form-control" id="comment-text-area" rows="3">Tell us about your experience regarding this training session!</textarea>
                <button type="submit" class="btn btn-primary" v-on:click="leaveComment()">Leave a comment</button>
            </div>

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
            refreshComments: 0
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
        },

        hasCommentPrivilage: function() {
            return true;
        },

        nextCommentId: function() {
            var maxId = 0;
            for (var i = 0; i < this.content.comments.length; i++) {
                if (this.content.comments[i].id > maxId)
                    maxId = this.content.comments[i].id;
            }
            maxId++;

            return maxId;
        },
        
        leaveComment: function() {
            if (!this.hasCommentPrivilage())
                return;

            var textArea = document.getElementById("comment-text-area");

            var newComment = Object();
            newComment.text = textArea.value;
            newComment.date = "100-100-2000";
            newComment.author = "Divjak";
            newComment.id = this.nextCommentId();

            console.log(newComment);

            this.content.comments.push(newComment);
            this.refreshComments++;
        }
    }
}
</script>