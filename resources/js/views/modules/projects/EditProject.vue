<template>
    <div>
        <page-title-bar></page-title-bar>
        <v-container fluid class="pt-0 pa-9 pl-9 pb-9">
            <v-row align="center">
                <v-col cols="12">
                    <v-card class="pa-11">
                        <ValidationObserver ref="projectForm">
                            <form @submit.prevent="">
                                <v-row>
                                    <v-col cols="12" v-if="$route.params.typeProject != 'Terrazas'">
                                        <ValidationProvider rules="required" v-slot="{ errors }">
                                            <v-select :label="$t('message.projectSubtype')" v-model="data.project_subtype" item-value="id" item-text="name" :items="arrayProjectSubTypes" :error-messages="errors"></v-select>
                                        </ValidationProvider>
                                    </v-col>
                                    <v-col cols="12">
                                        <ValidationProvider v-slot="{ errors }">
                                            <v-text-field :label="$t('message.name')" v-model="data.name" :error-messages="errors"></v-text-field>
                                        </ValidationProvider>
                                    </v-col>
                                    <v-col cols="12">
                                        <ValidationProvider rules="required" v-slot="{ errors }">
                                            <v-text-field :label="$t('message.webProject')" v-model="data.webProject" :error-messages="errors"></v-text-field>
                                        </ValidationProvider>
                                    </v-col>
                                    <v-col cols="12">
                                        <ValidationProvider rules="required|integer" v-slot="{ errors }">
                                            <v-text-field :label="$t('message.year')" v-model="data.year" :error-messages="errors"></v-text-field>
                                        </ValidationProvider>
                                    </v-col>
                                    <v-col cols="12">
                                        <ValidationProvider v-slot="{ errors }">
                                            <v-text-field :label="$t('message.city')" v-model="data.city" :error-messages="errors"></v-text-field>
                                        </ValidationProvider>
                                    </v-col>
                                    <v-col cols="12">
                                        <ValidationProvider v-slot="{ errors }">
                                            <v-text-field :label="$t('message.country')" v-model="data.country" :error-messages="errors"></v-text-field>
                                        </ValidationProvider>
                                    </v-col>
                                    <v-col cols="12">
                                        <ValidationProvider v-slot="{ errors }">
                                            <v-text-field :label="$t('message.architect')" v-model="data.architect" :error-messages="errors"></v-text-field>
                                        </ValidationProvider>
                                    </v-col>
                                    <v-col cols="12">
                                        <ValidationProvider v-slot="{ errors }">
                                            <v-text-field :label="$t('message.architectWeb')" v-model="data.architectWeb" :error-messages="errors"></v-text-field>
                                        </ValidationProvider>
                                    </v-col>
                                    <v-col cols="12">
                                        <ValidationProvider v-if="$route.params.typeProject == 'Piscinas'" v-slot="{ errors }">
                                            <v-text-field :label="$t('message.poolMan')" v-model="data.poolMan" :error-messages="errors"></v-text-field>
                                        </ValidationProvider>
                                    </v-col>
                                    <v-col cols="12">
                                        <ValidationProvider v-if="$route.params.typeProject == 'Piscinas'" v-slot="{ errors }">
                                            <v-text-field :label="$t('message.poolManWeb')" v-model="data.poolManWeb" :error-messages="errors"></v-text-field>
                                        </ValidationProvider>
                                    </v-col>
                                </v-row>
                            </form>
                        </ValidationObserver>
                        <v-card-text>
                            <v-row align="center" justify="center">
                                <v-col cols="12">
                                    <app-section-loader :status="loader"></app-section-loader>
                                    <v-list class="card-list todo-list list-grey-ripple" v-if="arrayImagesSaved.length > 0" subheader three-line>
                                        <v-subheader>{{$t('message.imagesSaved')}}</v-subheader>
                                        <v-list-item v-for="(item, index) in arrayImagesSaved" :key="index" href="javascript:;" ripple>
                                            <v-list-item-avatar>
                                                <v-img :src="item.url_image"></v-img>
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title><h5>{{item.image}}</h5><span v-if="index === 0">{{$t('message.mainImage')}}</span></v-list-item-title>
                                            </v-list-item-content>
                                            <v-btn fab dark small color="success" @click="editImage(item)" class="trash-icon">
                                                <v-icon class="zmdi zmdi-edit"></v-icon>
                                            </v-btn>
                                            <v-btn fab dark small color="error" @click="onDeleteImageSaved(item.id)" class="trash-icon">
                                                <v-icon class="zmdi zmdi-delete"></v-icon>
                                            </v-btn>
                                        </v-list-item>
                                    </v-list>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12">
                                    <v-row justify="start">
                                        <h5>{{$t('message.galery')}}</h5>
                                    </v-row>
                                    <ValidationObserver ref="imageForm">
                                        <form @submit.prevent="">
                                            <v-row justify="center">
                                                <v-col xl="4" lg="4" md="4" sm="12" cols="xs-12" align-self="center" class="pa-0">
                                                    <v-row class="product-images-wrap" justify="center">
                                                        <a v-if="imageToArray.previewImage" href="javascript:void(0);" @click="(imageToArray.previewImage=null); (imageToArray.image=null);">
                                                            <v-img :src="imageToArray.previewImage" width="200" height="200"></v-img>
                                                        </a>
                                                        <v-col v-else  cols="8" class="pb-0">
                                                            <ValidationProvider rules="required" v-slot="{ errors }">
                                                                <div class="thumb-wrap btn-input-product" for="upload">
                                                                    <div class="edit-btn d-flex justify-center align-items-center">
                                                                        <span class="fw-bold white--text">Image</span>
                                                                    </div>
                                                                    <input type="file" @change="uploadImage($event, 'image');" accept="image/*" class="upload-img">
                                                                </div>
                                                    	        <ul v-if="errors[0]" class="error--text pl-0 subtitle-2"><li style="list-style: none">{{errors[0]}}</li></ul>
                                                            </ValidationProvider>
                                                        </v-col>
                                                    </v-row>
                                                </v-col>
                                                <v-col xl="6" lg="6" md="6" sm="12" cols="xs-12" align-self="center" class="pa-0">
                                                    <v-row justify="center">
                                                        <v-col xl="4" lg="4" md="4" sm="12" cols="xs-12" align-self="center" class="pa-0" v-for="(category, index) in arrayCategories" :key="index">
                                                            <v-select class="mr-5 ml-5" multiple :label="$t('message.'+category.label)" v-model="imageToArray.tags_id" item-value="id" item-text="name" :items="category.tags"></v-select>
                                                        </v-col>
                                                    </v-row>
                                                </v-col>
                                                <v-col xl="2" lg="2" md="2" sm="12" cols="xs-12" align-self="center" class="pa-0">
                                                    <v-row justify="center">
                                                        <v-col xl="6" lg="6" md="6" sm="12" cols="xs-12" align-self="center" class="pa-0">
                                                            <v-btn type="submit" block color="warning" :loading="loader" :disabled="loader" @click="addItem()">{{$t('message.add')}}</v-btn>
                                                        </v-col>
                                                    </v-row>
                                                </v-col>
                                            </v-row>
                                        </form>
                                    </ValidationObserver>
                                </v-col>
                            </v-row>
                            <v-row align="center" justify="center">
                                <v-col cols="12">
                                    <app-section-loader :status="loader"></app-section-loader>
                                    <v-list class="card-list todo-list list-grey-ripple" v-if="data.images.length > 0" subheader three-line>
                                        <v-subheader>{{$t('message.addedImages')}}</v-subheader>
                                        <v-list-item v-for="(item, index) in data.images" :key="index" href="javascript:;" ripple>
                                            <v-list-item-avatar>
                                                <v-img :src="item.previewImage"></v-img>
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title><h5>Image {{index+1}}</h5></v-list-item-title>
                                            </v-list-item-content>
                                            <v-btn fab dark small color="error" @click="onDelete(index)" class="trash-icon">
                                                <v-icon class="zmdi zmdi-delete"></v-icon>
                                            </v-btn>
                                        </v-list-item>
                                    </v-list>
                                </v-col>
                            </v-row>
						</v-card-text>
                        <v-card-actions>
                            <v-row justify="start">
                                <v-btn type="submit" color="primary" class="ma-2" :loading="loader" :disabled="loader" @click="updateProject()">{{$t('message.accept')}}</v-btn>
                                <router-link :to="`/${getCurrentAppLayoutHandler() + '/manage-projects?typeProject=' + $route.params.typeProject }`">
                                    <v-btn color="white" class="ma-2" :loading="loader" :disabled="loader">{{$t('message.cancel')}}</v-btn>
                                </router-link>
                            </v-row>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <v-snackbar v-model="notificationData.activator" :color="notificationData.color" :timeout="4000" :top="true" :right="true">
            {{notificationData.message}}
            <v-icon class="ml-2" small @click="notificationData.activator = false">mdi-close</v-icon>
        </v-snackbar>

		<delete-confirmation-dialog ref="deleteConfirmationDialog" :heading="$t('message.deleteImage')" message="" @onConfirm="deleteImage"></delete-confirmation-dialog>
		<delete-confirmation-dialog ref="deleteConfirmationDialogImageSaved" :heading="$t('message.deleteImage')" message="" @onConfirm="deleteImageSaved"></delete-confirmation-dialog>

        <v-dialog v-model="dialog" max-width="1000px">
			<v-card>
				<v-card-title>
					<span class="headline">{{$t('message.edit')}}</span>
				</v-card-title>
				<v-card-text>
					<v-container class="grid-list-md">
                        <v-row justify="center">
                            <v-col xl="6" lg="6" md="6" sm="12" cols="xs-12" align-self="center" class="pa-0">
                                <v-row class="product-images-wrap" justify="center">
                                    <v-img max-width="75%" :src="imageToEdit.url_image"></v-img>
                                </v-row>
                                <v-row justify="center" class="mt-6">
                                    <h6>{{$t('message.replaceImage')}}</h6>
                                    <v-col xl="12" lg="12" md="12" sm="12" cols="xs-12" align-self="center" class="pa-0">
                                        <input type="file" @change="uploadNewImage($event);" accept="image/*" class="upload-img">
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col xl="6" lg="6" md="6" sm="12" cols="xs-12" align-self="center" class="pa-0">
                                <v-row justify="center">
                                    <v-col xl="4" lg="4" md="4" sm="12" cols="xs-12" align-self="center" class="pa-0" v-for="(category, index) in arrayCategories" :key="index">
                                        <v-select class="mr-5 ml-5" multiple :label="$t('message.'+category.label)" v-model="imageToEdit.tags" item-value="id" item-text="name" :items="category.tags"></v-select>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
					</v-container>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="error" class="text-capitalize" @click.native="noEdit">{{$t('message.close')}}</v-btn>
					<v-btn color="primary" class="text-capitalize" v-on:click="updateImage()">{{$t('message.edit')}}</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>

        <app-section-loader :status="loader"></app-section-loader>

    </div>
</template>

<script>
import { getCurrentAppLayout } from "Helpers/helpers";
import { required, integer} from 'vee-validate/dist/rules'
import { ValidationObserver, ValidationProvider, setInteractionMode, extend } from 'vee-validate'
setInteractionMode('eager');
extend('required', {...required, message: 'The field is required'});
extend('integer', {...integer, message: 'Must be a whole number'});

export default {
    name: "EditProject",
    components: {
        ValidationProvider,
        ValidationObserver,
    },
    data() {
        return {
            imageToEdit: {},
            dialog: false,
            changeImage: null,
            notificationData: {
				color: '',
				message: '',
				activator: false,
            },
            index: null,
            loader: true,
            previewMainImage: null,
            data: {
                name:   null,
                webProject: null,
                year:   null,
                city: null,
                country:   null,
                architect: null,
                architectWeb: null,
                poolMan: null,
                poolManWeb:   null,
                project_type:   null,
                project_subtype: null,
                images: [],
                mainImage: null
            },
            imageToArray: {
				previewImage: null,
				image: null,
				tags_id: [],
			},
            arrayProjectSubTypes: [],
            arrayCategories: [],
            arrayImagesSaved: [],
            idImageSaved: null
        }
    },

    created() {
        let data = {
            id: this.$route.params.id,
            typeProject: this.$route.params.typeProject,
        }
        this.$store.dispatch('projects/editProject', data).then(response => {
            this.data.name = response.data.project.name;
            this.data.webProject = response.data.project.project_website;
            this.data.year = response.data.project.year;
            this.data.city = response.data.project.city;
            this.data.country = response.data.project.country;
            this.data.architect = response.data.project.architect;
            this.data.architectWeb = response.data.project.architect_website;
            this.data.poolMan = response.data.project.pool_man;
            this.data.poolManWeb = response.data.project.pool_man_website;
            this.data.project_subtype =  response.data.project.project_subtype_id;
            this.arrayProjectSubTypes = response.data.subtypes;
            this.arrayCategories = response.data.categories;
            this.arrayImagesSaved = response.data.project.images;
        });
    },

    mounted() {
        setTimeout(() => (this.loader = false), 500);
    },

    methods: {
        getCurrentAppLayoutHandler() {
            return getCurrentAppLayout(this.$router);
        },

        resetImageToArray(){
            this.imageToArray.previewImage = null;
            this.imageToArray.image = null;
            this.imageToArray.tags_id = [];
        },

        addItem(){
            this.$refs.imageForm.validate().then(success => {
                if (success == true) {
                    this.data.images.push({
                        previewImage: this.imageToArray.previewImage,
                        image: this.imageToArray.image,
                        tags_id: this.imageToArray.tags_id,
                    });
                    this.resetImageToArray();
                    this.$refs.imageForm.reset();
                }
            });
        },

        onDelete(index) {
			this.$refs.deleteConfirmationDialog.openDialog();
			this.index = index;
        },

		deleteImage() {
			this.$refs.deleteConfirmationDialog.close();
			this.loader = true;
			setTimeout(() => {
				this.loader = false;
				this.data.images.splice(this.indexProduct, 1);
				this.index = null;
				this.notificationData = {color: 'success', message: 'Image removed.', activator: true}
			}, 1500);
        },

        onDeleteImageSaved(idImageSaved) {
			this.$refs.deleteConfirmationDialogImageSaved.openDialog();
			this.idImageSaved = idImageSaved;
        },

        deleteImageSaved(){
            this.$refs.deleteConfirmationDialogImageSaved.close();
            try {
                this.loader = true;
                this.$store.dispatch('projects/deleteImageSaved', this.idImageSaved).then(response => {
                    if (response.data){
                        this.notificationData = {color: response.data.color, message: response.data.message, activator: true};
                    }
                    setTimeout(() => {
                        if (response.data.status == 'OK'){
                            let data = {
                                id: this.$route.params.id,
                                typeProject: this.$route.params.typeProject,
                            }
                            this.$store.dispatch('projects/editProject', data).then(response => {
                                this.arrayImagesSaved = response.data.project.images;
                            });
                        }
                        this.loader = false;
                        this.idImageSaved = null;
                    }, 1000);
                }).catch(response => {
                    setTimeout(() => (this.loader = false, this.idImageSaved = null), 1000);
                    if (response.data)
                    {  this.notificationData = {color: response.data.color, message: response.data.message, activator: true}; }
                });
            } catch (error) {
                console.log("Error antes de llamar al Vuex Store", error);
                this.$swal({icon: 'error', title: 'Oops...', text: 'Ha ocurrido un error previo al envio de información.',})
                setTimeout(() => (this.loader = false), 1000);
            }
		},

       uploadImage(event, type) {
			switch (type) {
				case 'MainImage':
					if (event == null)
					{ this.previewMainImage=null; this.data.mainImage=null; return; }

					this.data.mainImage = event.target.files[0];
					const readerMainImage = new FileReader();
					readerMainImage.onload = event => { this.previewMainImage = readerMainImage.result; };
					readerMainImage.readAsDataURL(this.data.mainImage);
				break;
				case 'image':
					if (event == null)
					{ this.imageToArray.previewImage=null; this.imageToArray.image=null; return; }
					this.imageToArray.image =  event.target.files[0];

					const readerImageToArray = new FileReader();
					readerImageToArray.onload = event => { this.imageToArray.previewImage = readerImageToArray.result; };
					readerImageToArray.readAsDataURL(this.imageToArray.image);
				break;
			}
		},

        uploadNewImage(event) {
            if (event == null)
            { this.changeImage = null; return; }

            this.changeImage = event.target.files[0];
            const readerImage = new FileReader();
            readerImage.readAsDataURL(this.changeImage);
		},

        editImage(image){
            this.imageToEdit = image;
            this.dialog = true;
            this.changeImage = null;
        },

        updateImage(){
            this.dialog = false;
            try {
                this.loader = true;
                let formData = new FormData();
                formData.append('imageId', this.imageToEdit.id);
                formData.append('tags_id', this.imageToEdit.tags);
                this.changeImage != null ? formData.append('newImage', this.changeImage) : '';

                this.$store.dispatch('projects/editTagsImage', formData).then(response => {
                    if (response.data){
                        this.notificationData = {color: response.data.color, message: response.data.message, activator: true};
                    }
                    setTimeout(() => {
                        if (response.data.status == 'OK'){
                            let data = {
                                id: this.$route.params.id,
                                typeProject: this.$route.params.typeProject,
                            }
                            this.$store.dispatch('projects/editProject', data).then(response => {
                                this.arrayImagesSaved = response.data.project.images;
                            });
                        }
                        this.loader = false;
                        this.imageToEdit = {};
                        this.changeImage = null;
                    }, 1000);
                }).catch(response => {
                    setTimeout(() => (this.loader = false, this.changeImage = null, this.imageToEdit = {}), 1000);
                    if (response.data)
                    {  this.notificationData = {color: response.data.color, message: response.data.message, activator: true}; }
                });
            } catch (error) {
                console.log("Error antes de llamar al Vuex Store", error);
                this.$swal({icon: 'error', title: 'Oops...', text: 'Ha ocurrido un error previo al envio de información.',})
                setTimeout(() => (this.loader = false), 1000);
            }
        },

        noEdit(){
            this.imageToEdit = {};
            this.dialog = false;
            this.changeImage = null;
        },

        updateProject() {
            if(this.data.images.length === 0 && this.arrayImagesSaved.length === 0 ){
               this.$swal({icon: 'info', title: 'Oops...', text: 'Suministre la información requerida. Imágenes son requeridas',})
            }else{
                try {
                    this.loader = true;
                    this.$refs.projectForm.validate().then(success => {
                        if (success == true) {
                            this.loader = true;
                            let formData = new FormData();

                            this.data.images.forEach( (image, index) => {
                                formData.append('image'+index, image.image);
                            });

                            formData.append('data', JSON.stringify(this.data));
                            formData.append('dataImages', JSON.stringify(this.data.images));

                            let dataToUpdate = {
                                id: this.$route.params.id,
                                data: formData
                            }
                            this.$store.dispatch('projects/updateProject', dataToUpdate).then(response => {
                                if (response.data){
                                    this.$refs.projectForm.reset();
                                    this.notificationData = {color: response.data.color, message: response.data.message, activator: true};
                                    }

                                setTimeout(() => {
                                    if (response.data.status === 'OK')
                                    { this.$router.push(`/${this.getCurrentAppLayoutHandler() + '/manage-projects?typeProject=' + this.$route.params.typeProject}`);}
                                    this.loader = false
                                }, 1000);
                            }).catch(response => {
                                setTimeout(() => (this.loader = false), 1000);
                                if (response.data)
                                {  this.notificationData = {color: response.data.color, message: response.data.message, activator: true}; }
                            });
                        } else {
                            this.$swal({icon: 'info', title: 'Oops...', text: 'Suministre la información requerida',})
                            setTimeout(() => (this.loader = false), 500);
                        }
                    });
                } catch (error) {
                    console.log("Error antes de llamar al Vuex Store", error);
                    this.$swal({icon: 'error', title: 'Oops...', text: 'Ha ocurrido un error previo al envio de información.',})
                    setTimeout(() => (this.loader = false), 1000);
                }
            }
        },

        editMainImage(image){
            this.changeMainImage.id = image.id;
            this.dialogMainImage = true;
        },

        noEditMainImage(){
           this.dialogMainImage = false;
           this.changeMainImage.image = null;
           this.changeMainImage.id = null;
        },

        updateMainImage(){
              this.dialogMainImage = false;
            try {
                this.loader = true;
                let formData = new FormData();

                (this.changeMainImage.image !=null)     ? formData.append('image', this.changeMainImage.image ) : formData.append('mainImage', null);

                formData.append('imageId', this.changeMainImage.id);

                this.$store.dispatch('projects/editMainImage', formData).then(response => {
                    if (response.data){
                        this.notificationData = {color: response.data.color, message: response.data.message, activator: true};
                    }
                    setTimeout(() => {
                        if (response.data.status == 'OK'){
                            let data = {
                                id: this.$route.params.id,
                                typeProject: this.$route.params.typeProject,
                            }
                            this.$store.dispatch('projects/editProject', data).then(response => {
                                this.arrayImagesSaved = response.data.project.images;
                            });
                        }
                        this.loader = false;
                        this.changeMainImage.image = null;
                        this.changeMainImage.id = null;
                    }, 1000);
                }).catch(response => {
                    setTimeout(() => (
                        this.loader = false,
                        this.changeMainImage.image = null,
                        this.changeMainImage.id = null), 1000);
                    if (response.data)
                    {  this.notificationData = {color: response.data.color, message: response.data.message, activator: true}; }
                });
            } catch (error) {
                console.log("Error antes de llamar al Vuex Store", error);
                this.$swal({icon: 'error', title: 'Oops...', text: 'Ha ocurrido un error previo al envio de información.',})
                setTimeout(() => (
                    this.loader = false,
                    this.changeMainImage.image = null,
                    this.changeMainImage.id = null), 1000);
            }
        }
    },
}
</script>
<style scoped>
.v-avatar {
    border-radius: 0%;
}

.v-list-item__avatar{
    height: 70px !important;
    min-width: 70px !important;
    width: 70px !important;
}
</style>
