<template>
    <div id="wrapper">
        <app-sidebar></app-sidebar>
        
        <div class="container" id="content">
            <h1>{{content.name}} </h1>
            <p> {{content.desc}} </p>


            <h2> Choose your perfect training type! </h2>
            <table>
              <thead>
                <tr>
                  <td>Name</td>,
                  <td>Duration</td>,
                  <td>Difficulty</td>
                </tr>
              </thead>

              <tbody>
                <tr v-for="training in content.trainings" :key="training.id">
                  <td>{{training.name}}</td>
                  <td>{{training.duration}}</td>
                  <td>{{training.diff}}</td>
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