<template>
    <div>
        <page-title-bar></page-title-bar>
        <v-container fluid class="pt-0 pa-9 pl-9 pb-9">
            <v-row align="center" justify="center">
                <app-card colClasses="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
					<app-section-loader :status="loader"></app-section-loader>
                    <v-card-title class="pt-0">
						<v-spacer></v-spacer>
						<v-text-field append-icon="search" :label="$t('message.search')" single-line hide-details v-model="search"></v-text-field>
					</v-card-title>
                    <v-data-table
						:headers="headers"
						:items="arrayProjects"
						:search="search"
					>
						<template v-slot:item="{ item }">
							<tr>
								<td>
                                    <center>
                                        <v-img class="mb-3" width="70px" height="70px" :src="item.images[0].url_image"></v-img>
                                    </center>
                                </td>
                                <td class="text-center">{{ item.name }}</td>
                                <td class="text-center">
                                    <router-link :to="{ path:`/${getCurrentAppLayoutHandler() + '/manage-projects/'+ item.id + '/' + $route.query.typeProject}`}">
                                        <v-btn color="warning" :disabled="loader">
                                             <v-icon left>
                                                mdi-subtitles-outline
                                            </v-icon>
                                            {{$t('message.manage')}}
                                        </v-btn>
                                    </router-link>
                                </td>
                                <td class="text-center">
                                    <v-btn color="error" :disabled="loader" @click="deleteproject(item.id)">
                                         <v-icon left>
                                            mdi-delete-outline
                                        </v-icon>
                                        {{$t('message.delete')}}
                                    </v-btn>
                                </td>
                                <td class="text-center">
                                    <v-btn color="dark" :disabled="loader" @click="copied(true)" v-clipboard:copy="item.url_project_rosagres">
                                         <v-icon left>
                                            mdi-content-copy
                                        </v-icon>
                                        Link
                                    </v-btn>
                                </td>
							</tr>
						</template>
                        <template v-slot:no-data>
                            <h5 class="ma-2">{{ $t('message.noProjects') }}</h5>
                        </template>
					</v-data-table>
                </app-card>
            </v-row>
        </v-container>
        <delete-confirmation-dialog ref="deleteConfirmationDialog" :heading="$t('message.delete')" message="" @onConfirm="projectDelete"></delete-confirmation-dialog>
        <v-snackbar v-model="notificationData.activator" :color="notificationData.color" :timeout="4000" :top="true" :right="true">
            {{notificationData.message}}
            <v-icon class="ml-2" small @click="notificationData.activator = false">mdi-close</v-icon>
        </v-snackbar>
        <app-section-loader :status="loader"></app-section-loader>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getCurrentAppLayout } from "Helpers/helpers";

export default {
    name: "ManageProject",
    components: {
    },
    data() {
        return {
            notificationData: {
				color: '',
				message: '',
				activator: false,
            },
            loader: true,
            search: null,
            pagination: {},
            idProject: null,
            headers: [
                { text: "Image", value: "image", sortable: false, filterable: false },
                { text: "Name", value: "name", sortable: false, filterable: true },
            ],
        }
    },

    created() {
        this.getProjects();
    },

    mounted() {
        setTimeout(() => (this.loader = false), 500);
    },

    computed: {
        ...mapGetters({
            arrayProjects: "projects/projectsList",
        }),
    },

    methods: {
        copied(status){
            if(status == true){
                this.notificationData = {color: 'success', message: 'Copied.', activator: true};
            }else{
                this.notificationData = {color: 'error', message: 'Error.', activator: true};
            }
        },
        getProjects(){
            if(this.$route.query.typeProject != null && this.$route.query.typeProject != ''){
            this.$store.dispatch('projects/getProjectsList', this.$route.query.typeProject).then(response => {
            });
            }else{
                this.$store.dispatch('projects/getProjectsList', 'Piscinas').then(response => {
                });
            }
        },
        getCurrentAppLayoutHandler() {
            return getCurrentAppLayout(this.$router);
        },
        deleteproject(idproject){
            this.idProject = idproject;
            this.$refs.deleteConfirmationDialog.openDialog();
        },
        projectDelete(){
            this.$refs.deleteConfirmationDialog.close();
            try {
                this.loader = true;
                this.$store.dispatch('projects/deleteProject', this.idProject).then(response => {
                    if (response.data){
                        this.notificationData = {color: response.data.color, message: response.data.message, activator: true};
                    }
                    setTimeout(() => {
                        if (response.data.status === 'OK'){
                            this.getProjects();
                        }
                        this.loader = false;
                        this.idProject = null;
                    }, 1000);
                }).catch(response => {
                    setTimeout(() => (this.loader = false, this.idProject = null), 1000);
                    if (response.data)
                    {  this.notificationData = {color: response.data.color, message: response.data.message, activator: true}; }
                });
            } catch (error) {
                console.log("Error antes de llamar al Vuex Store", error);
                this.$swal({icon: 'error', title: 'Oops...', text: 'Ha ocurrido un error previo al envio de información.',})
                setTimeout(() => (this.loader = false), 1000);
            }
		},
    },
}
</script>
