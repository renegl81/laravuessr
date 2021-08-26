<template>
	<div>
		<page-title-bar></page-title-bar>
		<!--Inicio Carrusel con texto-->
		<v-container fluid grid-list-xl pt-0>
    <v-layout row wrap justify-center>
      <v-flex xs12>
         <v-carousel hide-delimiters>
	          <v-carousel-item
	            v-for="(item,i) in items"
	            :key="i"
	            :src="item.src"
	          >
							  <v-container fill-height fluid pa-0 ma-0 pb-3>
		              <v-layout fill-height align-end pb-4 mb-4>
		                <v-flex xs12>
		                  <v-card color="red" class="pa-2">
		                  <span class="headline white--text" v-text="item.src"></span>
		                  </v-card>
		                </v-flex>
		              </v-layout>
		            </v-container>
           	 </v-carousel-item>
           </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
		<!--Fin Carrusel con texto-->
		<v-container fluid grid-list-xl pt-0>
			<v-row>
				<v-col cols="12" class="col-height-auto">
					<app-card
						customClasses="mb-5"
						:heading="$t('message.default')"
					>
						<v-carousel>
							<v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
						</v-carousel>
					</app-card>
					<app-card
						customClasses="mb-5"
						:heading="$t('message.customTransition')"
					>
						<v-carousel>
							<v-carousel-item v-for="(item,i) in items" v-bind:key="i" v-bind:src="item.src" transition="fade" reverseTransition="fade"></v-carousel-item>
						</v-carousel>
					</app-card>
					<app-card
						customClasses="mb-5"
						:heading="$t('message.customDelimiter')"
					>
						<v-carousel delimiter-icon="stop">
							<v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
						</v-carousel>
					</app-card>
					<app-card
						customClasses="mb-5"
						:heading="$t('message.hideControls')"
					>
						<v-carousel :show-arrows="false" cycle>
							<v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
						</v-carousel>
					</app-card>
					<app-card
						:heading="$t('message.hideDelimiters')"
					>
						<v-carousel hide-delimiters>
							<v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
						</v-carousel>
					</app-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "/static/img/carousel-slider-1.jpg"
        },
        {
          src: "/static/img/carousel-slider-2.jpg"
        },
        {
          src: "/static/img/carousel-slider-3.jpg"
        }
      ]
    };
  }
};
</script>
