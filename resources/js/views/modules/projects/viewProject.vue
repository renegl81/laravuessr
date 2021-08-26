<template>
	<v-app>

		<app-section-loader :status="loader"></app-section-loader>
		<OptionsFilter></OptionsFilter>
		<v-content :class="typeProject !== 'terrazas' && isMobile ? 'mt-5 pa-6': ''" style="margin-top: 50px;">
			<v-row v-if="!showDetail" class="f-row">
				<v-col xl="1" lg="1" md="1" sm="12" cols="xs-12" class="arrow-back">
					<a @click="backToList()"><v-img src="/back.png" width="18px"></v-img></a>
				</v-col>
				<v-col v-if="project != null" xl="10" lg="10" md="10" sm="12" cols="xs-12" class="mx-auto">
					<v-row class="list-row">
						<v-col xl="9" lg="9" md="8" sm="12" cols="xs-12">
							<v-row>
								<v-col xl="4" lg="4" md="6" sm="12" cols="xs-12" v-for="(img,i) in project.images" :key="i">
									<v-img :src="img.url_image" :height="isMobile ? '185px' : 'auto'" @click="viewCarousel()" />
								</v-col>
							</v-row>
						</v-col>
						<v-col xl="3" lg="3" md="2" sm="12" cols="xs-12" class="content-wrap">
							<div class="mb-0" v-if="showName" :class="isMobile ? 'mb-2' : ''">
                                <a class="font-weight-bold black--text text-decoration-underline" :href="project.project_website" target="_blank" rel="noopener noreferrer">
                                    <h1 style="text-decoration: underline black;" class="text-view text-capitalize font-weight-bold black--text text-decoration-underline">
                                       {{project.name}}
                                    </h1>
                                </a>
                            </div>
                            <div class="mb-3" v-if="project.project_subtype_id === 1" :class="isMobile ? 'mb-2' : ''">
                                <h1 class="text-view text-uppercase black--text">{{$t('message.piscinaPrivada')}}</h1>
                            </div>

							<h2 v-if="project.country || project.city" class="fw-normal mb-2" :class="isMobile ? 'mb-2' : ''">
                                <span class="text-view text-capitalize font-weight-bold black--text"><template v-if="project.city">{{project.city}},</template><template v-if="project.country"> {{project.country}}</template></span></h2>
							<h2 class="mb-3" :class="isMobile ? 'mb-2' : ''" v-if="project.architect && project.architect_website">
                                <a class="font-weight-bold black--text text-decoration-underline text-capitalize" style="text-decoration: underline black;" :href="project.architect_website" target="_blank" rel="noopener noreferrer">
                                    <h2>{{project.architect}}</h2></a>
                            </h2>
							<template v-if="project.images[0].descriptionTags.length > 0">
                                <div class="mb-4" :class="isMobile ? 'mb-2' : ''" v-for="(tag, index) in project.images[0].descriptionTags" :key="index">
                                    <template v-if="project.project_subtype_id === 4">
                                        <h2 class="fw-normal" v-if="tag.label && visibleTag(tag.label)"><span class="text-view text-uppercase black--text">{{$t('message.'+tag.label)}}</span></h2>
                                        <h2 v-if="tag.tags[0] && visibleTag(tag.label)" class="text-view text-capitalize font-weight-bold black--text">{{tag.tags[0].name}}</h2>
                                    </template>
                                    <template v-else>
                                        <h2 class="fw-normal" v-if="tag.label"><span class="text-view text-uppercase black--text" v-if="tag.label === 'sistema'">
                                            {{$t('message.'+tag.label+'Side')}}</span>
                                            <span  class="text-view text-uppercase black--text" v-else>{{$t('message.'+tag.label)}}</span>
                                        </h2>
                                        <h2 v-if="tag.tags[0]" class="text-view text-capitalize font-weight-bold black--text">{{tag.tags[0].name}}</h2>
                                    </template>
                                </div>
							</template>
                            <div class="mb-0" :class="isMobile ? 'mb-2' : ''">
                                <h2 class="fw-normal"><span class="text-view text-uppercase black--text">{{$t('message.rosaGres')}}</span></h2>
                                <h2 class="text-view text-capitalize font-weight-bold black--text">{{ $t('message.rosaGresColor') }}</h2>
                            </div>
						</v-col>
					</v-row>
				</v-col>
				<v-col v-else xl="10" lg="10" md="10" sm="12" cols="xs-12" class="mx-auto">
					<span class="ml-6 mt-8">{{$t('message.noProjects')}}</span>
				</v-col>
			</v-row>
			<v-row v-if="showDetail">
				<ViewDetailProject :type="typeProject" :images="project.images" @backToViewProject="backToViewProject()"></ViewDetailProject>
			</v-row>
		</v-content>
	</v-app>
</template>
<script>
import ViewDetailProject from "./viewDetailProject";
import OptionsFilter from "./OptionsFilter";
export default {
	name: "ViewProject",
	components: {
      ViewDetailProject,
      OptionsFilter
    },
    data() {
        return {
          loader: true,
          showDetail: false,
          typeProject: null,
          project: null,
          isMobile: null,
          language: null
        }
    },

	created(){
        this.language = this.$getLanguage();
		this.typeProject = this.$getTypeProject(this.language);
        this.changeLanguage(this.language);
        this.isMobile = this.$isMobile();
		this.$store.dispatch('projects/getProjectBySlug', this.$route.params.slugProject).then(response => {
        this.project = response.data.project;
        });
	},

    mounted() {
        setTimeout(() => (this.loader = false), 1200);
    },
    computed:{
        showName(){
            let name = name && name.length > 0 ? this.project.name.toLower : null;
            return !!(name && name !== 'piscina privada');
        }
    },
    methods: {
		viewCarousel() {
			this.showDetail = true;
		},
        visibleTag(label){
           return label !== 'formato' && label !== 'acabado' && label !== 'piezasEspeciales';

        },
		backToViewProject(){
			this.showDetail = false;
		},
		backToList(){
			this.$router.push({ name: 'ViewAll', params: { typeProject: this.typeProject, language: this.language, typeFilter: 'all' }})
		},
		changeLanguage(language) {
            this.$i18n.locale = language;
        },
    },
}
</script>
<style>
.text-view {
    color: #333333;
    font-size: 13px;
}
.arrow-back{
    padding-left: 15px;
}

h1, .h1 {
    font-size: 0.95rem;
}
h2, .h2 {
    font-size: 0.85rem;
}

@media only screen and (min-width: 1400px) {

}
@media (min-width: 1400px) {

}

</style>
