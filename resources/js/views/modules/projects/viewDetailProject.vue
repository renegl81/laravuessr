<template>
    <div>
        <app-section-loader :status="loader"></app-section-loader>
        <v-row class="f-row">
            <v-col xl="1" lg="1" md="1" sm="12" cols="xs-12">
                <a @click="backToViewProject()"><v-img src="../../../back.png" width="18px"></v-img></a>
            </v-col>
            <v-col xl="10" lg="10" md="10" sm="12" cols="xs-12">
              <v-carousel hide-delimiters class="carousel" style="height: auto !important;">
                <v-carousel-item v-for="(item,i) in images" :key="i" style="height: auto !important;">
                  <v-img :src="item.url_image" :alt="item.alt ? item.alt : ''"></v-img>
                  <v-card  color="#ffffff" class="pa-2" v-if="item.descriptionTags.length > 0">
                    <span v-for="(tag, index) in item.descriptionTags" :key="index">
                        <template v-if="type.includes('terrazas') && tag.label === 'colorPavimento'">
                         <h2  class="text-view text-uppercase tags-class d-inline-block fw-normal">
                            {{$t('message.'+tag.label)}}:
                         </h2>
                          <h2 v-if="tag.tags[0]" class="mb-0 black-h1" style="font-size: 13px;">{{tag.tags[0].name}}</h2>

                        </template>
                        <template v-if="!type.includes('terrazas') && tag.label !== 'colorPavimento'">
                             <h2  class="text-view text-uppercase tags-class d-inline-block fw-normal">
                                 <template v-if="tag.label === 'sistema'">{{$t('message.'+tag.label+'Side')}}</template>
                                 <template v-else>{{$t('message.'+tag.label)}}</template>:</h2>
                                 <h2 v-if="tag.tags[0]" class="mb-0 black-h1" style="font-size: 13px;">{{tag.tags[0].name}}</h2>
                                     <span v-if="tag.tags[0] && index < (item.descriptionTags.length-1) " class="text-view text-uppercase tags-class"> / </span>

                        </template>
                    </span>
                  </v-card>
                </v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
    name: "ViewDetailProject",
    props: {
        images: Array,
        type: String
    },
    data() {
        return {
          loader: true,
        }
    },

    created() {
       //console.log(this.images);
       //console.log(this.images[0].url_image);
    },

    mounted() {
        setTimeout(() => (this.loader = false), 1200);
    },

    methods: {
      backToViewProject() {
        this.$emit("backToViewProject");
      }
    },
}
</script>
<style>
.v-carousel__item{
  height: auto !important;
}
.black-h1{
  color: #000000 !important;
  display: inline;
}
h2, .h2 {
    font-size: 0.95rem;
}
.f-row{
    margin-top: 50px;
}
@media (min-width: 766px) {
    .f-row {
        margin-top: 100px
    }
}

@media (max-width: 766px) {
  .carousel {
    width: 350px;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .carousel {
    width: 740px;
  }
}
@media (min-width: 1024px) and (max-width: 1366px) {
  .carousel {
    width: 900px;
  }
}
.text-view {
    color: #333333;
    font-size: 13px;
}
.tags-class{
  color: black !important;
}
.v-card:not(.v-sheet--tile):not(.v-card--shaped) {
    border-radius: 0px !important;
}
</style>
