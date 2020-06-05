<template>
    <div id="wrapper">
        <app-sidebar></app-sidebar>
        
        <div class="container" id="content">

            <nav aria-label="breadcrumb" class="breadcrumbs">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/home">Home</a></li>
                    <li class="breadcrumb-item"><a href="/services/training">Trainings</a></li>
                    <li class="breadcrumb-item"><a :href="getBreadcrumbURL()"> {{ getTrainingType() }} </a></li>
                    <li class="breadcrumb-item active" aria-current="page"> {{ getLastURLWord() }}</li>
                </ol>
            </nav>

            <h1>{{content.name}} </h1>
            <p> {{content.desc}} </p>

            <table class="table table-striped table-dark" style="text-align: center">
                <thead>
                    <tr>
                        <th> Duration </th>
                        <th> Difficulty </th>
                        <th> User Mark </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td> {{content.duration}}' </td>
                        <td> {{content.diff}} / 5 </td>
                        <td> {{content.avg_mark}} / 5 </td>
                    </tr>
                </tbody>
            </table>

            <!--Gallery-->
            <div id="multi-item-example" class="carousel slide carousel-multi-item carousel-multi-item-2" data-ride="carousel">

                <div class="controls-top">
                    <a class="control-button" href="#multi-item-example" data-slide="prev"><i>&lt;</i></a>
                    <a class="control-button" href="#multi-item-example" data-slide="next"><i>&gt;</i></a>
                </div>

                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                        <div class="col-md-3 mb-3" v-for="image in content.images1" :key="image.id">
                            <div class="card">
                            <img class="img-fluid" :src="getImgUrl(image)">
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="col-md-3 mb-3" v-for="image in content.images2" :key="image.id">
                            <div class="card">
                            <img class="img-fluid" :src="getImgUrl(image)">
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <!--/Gallery-->

            <div class="rating-box">
                <h2>Rate this training</h2>
                <a class="rating" v-on:click="addRating(1)">1</a>
                <a class="rating" v-on:click="addRating(2)">2</a>
                <a class="rating" v-on:click="addRating(3)">3</a>
                <a class="rating" v-on:click="addRating(4)">4</a>
                <a class="rating" v-on:click="addRating(5)">5</a>
            </div>

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

        getCurrentSubtype: function() {
            var currUrl = this.$route.path;
            var splittedUrl = currUrl.split("/");

            return splittedUrl[splittedUrl.length - 1].toLowerCase();
        },

        hasCommentPrivilage: function() {
            var userInfo = require("../../assets/content/en/account.json")
            var attended = userInfo.attended

            for (var i = 0; i < attended.length; i++) {
                if (attended[i].subtype.toLowerCase() == this.getCurrentSubtype())
                    return true;
            }
            
            return false;
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
        
        getDate: function() {
            var date = new Date();

            var day = date.getDay() + 1;
            var month = date.getMonth() + 1;
            var year = date.getFullYear();

            var dayStr = "" + day;
            if (day < 10)
                dayStr = "0" + dayStr;
            
            var monthStr = "" + month;
            if (month < 10)
                monthStr = "0" + monthStr;
            
            var yearString = "" + year;

            var dateString = dayStr + "-" + monthStr + "-" + yearString;
            return dateString;
        },

        getAuthor: function() {
            var userInfo = require("../../assets/content/en/account.json")
            return userInfo.name
        },

        leaveComment: function() {
            if (!this.hasCommentPrivilage()) {
                alert("You must visit a training before leaving a comment!");
                return;
            }

            var textArea = document.getElementById("comment-text-area");

            var newComment = Object();
            newComment.text = textArea.value;
            newComment.date = this.getDate();
            newComment.author = this.getAuthor();
            newComment.id = this.nextCommentId();

            console.log(newComment);

            this.content.comments.push(newComment);
            this.refreshComments++;
        },

        getLastURLWord: function() {
            var currUrl = this.$route.path;
            var splitted = currUrl.split('/');
            var lastWord = splitted[splitted.length - 1];

            if (lastWord == "classical-yoga")
                return "Classical Yoga"
            else if (lastWord == "hatha-yoga")
                return "Hatha Yoga"
            else if (lastWord == "jain-yoga")
                return "Jain Yoga"
            else if (lastWord == "classical-pilates")
                return "Classical Pilates"
            else if (lastWord == "mat-pilates")
                return "Mat Pilates"
            else if (lastWord == "reformer-pilates")
                return "Reformer Pilates"
            else if (lastWord == "sbm")
                return "Strengthening back musculature"
            else if (lastWord == "iap")
                return "Intra-abdominal pressure"
            else if (lastWord == "mace")
                return "Martial Arts Core Excercises"
            else if (lastWord == "sprinting")
                return "Sprinting"
            else if (lastWord == "hiit")
                return "High-intensity interval training "
            else if (lastWord == "cycling")
                return "Cycling"
        },

        getTrainingType: function() {
            var currUrl = this.$route.path;
            var splitted = currUrl.split('/');
            var lastWord = splitted[splitted.length - 2];

            if (lastWord == "yoga")
                return "Yoga"
            else if (lastWord == "pilates")
                return "Pilates"
            else if (lastWord == "core")
                return "Core"
            else if (lastWord == "cardio")
                return "Cardio"
        },

        getBreadcrumbURL: function() {
            var currUrl = this.$route.path;
            var splitted = currUrl.split('/');
            var lastWord = splitted[splitted.length - 2];

            return "/services/training/" + lastWord
        },

        addRating: function(rating) {
            console.log(rating);
        }
    }
}
</script>