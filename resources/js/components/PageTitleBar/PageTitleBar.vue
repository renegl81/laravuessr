<template>
	<v-container fluid>
      <app-card :fullBlock="true" class="title-bar">
         <v-breadcrumbs class="pa-6 pr-4" :items="breadcrumbItems" v-if="breadcrumbItems != null">
            <template slot="item" slot-scope="props"> 
               <h2 class="mb-0">{{$t(props.item.title)}}</h2>
               <div class="spacer"></div>
					<v-breadcrumbs-item>
						<a href="javascript:void(0)">{{$t(props.item.breadcrumb[0].breadcrumbInactive)}}</a>
					</v-breadcrumbs-item>
               <v-breadcrumbs-item disabled class="text-capitalize">/ {{$t(props.item.breadcrumb[1].breadcrumbActive)}}</v-breadcrumbs-item>
           </template>
         </v-breadcrumbs>
      </app-card>
   </v-container>
</template>

<script>
export default {
	data() {
		return{
			breadcrumbItems: [],
			projectId: null
		}
	},
	created() {
		this.breadcrumbItems[0] = this.$breadcrumbs[0].meta;
	},
	mounted() {
		// console.log("this.$route.params="+this.$route.params.id);
		//this.projectId=this.$route.params.id;
	}
};
</script>
<style>
.v-breadcrumbs h2 {
    color: #333333 !important;
}
</style>