<template>
    <div>
        <page-title-bar></page-title-bar>

        <v-container fluid class="pt-0">
            <v-row align="center" justify="end">
                <v-col xl="3" lg="3" md="3" sm="6" cols="xs-12" class="text-right pt-0">
                    <router-link :to="`/${getCurrentAppLayoutHandler() + '/users/new-user'}`">
                        <v-btn color="primary" class="ma-2" :disabled="!$Can('Crear Usuarios') || loader">{{$t('message.create')}} {{$t('message.user')}}</v-btn>
                    </router-link>
                </v-col>
            </v-row>
        </v-container>

        <v-container fluid>
            <v-row>
                <v-col cols="12">
                    <v-card class="pa-3"> 

                        <v-card-title class="pa-0">
                            <v-row justify="space-between">
                                <v-col xl="4" lg="4" md="4" sm="12" cols="xs-12" align-self="center" class="text-left pl-4">
                                    <h4><b>{{$t('message.users')}}</b></h4>
                                </v-col>
                                <v-col xl="4" lg="4" md="4" sm="12" cols="xs-12">
                                    <v-text-field rounded append-icon="search" :label="$t('message.search')" v-model="searchUser" single-line hide-details></v-text-field>
                                    <hr>
                                </v-col>
                            </v-row>
                        </v-card-title>

                        <v-data-table v-if="$Can('Listar Usuarios')" :headers="usersTableHeader" :items="usersList" v-bind:search="searchUser" class="elevation-1">
                            <template v-slot:[`item.user.roles`]="{ item }">
                                <span v-for="(role, index) in item.roles" :key="index">
                                    {{role.name+', '}}
                                </span>
                            </template>
                             <template v-slot:[`item.status`]="{ item }">
                                <v-chip class="ma-2" :color="(item.status == 1) ? 'green' : 'orange'" text-color="white">
                                    {{(item.status == 1) ? $t('message.active') : $t('message.inactive')}}
                                </v-chip>
                            </template>
                            <template v-slot:[`item.actions`]="{ item }">
                                <div class="py-1">
                                    <div class="pt-1">
                                        <v-tooltip top>
                                            <template v-slot:activator="{ on }">
                                                <v-btn v-on="on" class="ma-2" text icon color="yellow darken-3" :disabled="!$Can('Cambiar Permisos Roles') || loader" @click="openRolesDialog(item)">
                                                    <v-icon>mdi-key</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>{{$t('message.roles')}}</span>
                                        </v-tooltip> 

                                        <v-tooltip top>
                                            <template v-slot:activator="{ on }">
                                                <v-btn v-on="on" class="ma-2" text icon color="indigo lighten-1" :disabled="!$Can('Editar Usuarios') || loader">
                                                    <router-link :to="{ path:`/${getCurrentAppLayoutHandler() + '/users/edit-user'}`, query: { user: item }}">
                                                        <v-icon>mdi-pencil</v-icon>
                                                    </router-link>
                                                </v-btn>
                                            </template>
                                            <span>{{$t('message.edit')}}</span>
                                        </v-tooltip> 

                                        <v-tooltip top>
                                            <template v-slot:activator="{ on }">
                                                <v-btn v-on="on" class="ma-2" text icon color="red lighten-1" :disabled="!$Can('Borrar Usuarios') || loader" medium @click="checkUserDelete(item)">
                                                    <v-icon>mdi-delete</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>{{$t('message.delete')}}</span>
                                        </v-tooltip> 
                                    </div>
                                </div>
                            </template>
                            <template v-slot:no-data>
                                <h5 class="ma-2 text-center"><b>{{$t('message.Therearenoregisteredusers')}}.</b></h5>
                            </template>
                        </v-data-table>
                        <v-data-table v-else :headers="usersTableHeader" :items="[]" sort-by="name" class="elevation-1">
                            <template v-slot:no-data>
                                <h5 class="ma-2 text-center"><b>{{$t('message.Youdonothavethenecessarypermissionstoviewthislist')}}.</b></h5>
                            </template>
                        </v-data-table>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <v-dialog v-if="deleteUserDialog" v-model="deleteUserDialog" max-width="400">
            <v-card class="pa-4">
                <v-card-title class="headline">¿Esta seguro?</v-card-title>
                <v-card-text v-if="this.userAuth.id == this.selectedUser.id">
                    No puede borrar su propio registro de usuario.
                </v-card-text>
                <v-card-text v-else>
                    Una vez borrada la información, no podrá ser recuperada.
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="ma-2" color="primary" :disabled="(this.userAuth.id == this.selectedUser.id) || loader" @click="deleteUser()">{{$t('message.accept')}}</v-btn>
                    <v-btn class="ma-2" color="white" :disabled="loader" @click="deleteUserDialog = false"> {{$t('message.cancel')}}</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

    <!-- CAMBIAR ROLES -->
        <v-dialog v-if="userRolesDialogActivator" v-model="userRolesDialogActivator" max-width="500" persistent>
            <v-card class="pa-4">
                <v-card-title class="headline px-0 pt-0">{{userRolesData.userName}}</v-card-title>
                <v-card-text class="px-0 pt-7">
                    <v-row justify="center">
                        <v-col cols="12">
                            <v-select v-model="userRolesData.userRoles" :items="avaliableRoles" :menu-props="{ maxHeight: '400' }" :label="$t('message.roles')" multiple chips persistent-hint></v-select>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions class="pa-0">
                    <v-spacer></v-spacer>
                    <v-btn color="primary" :disabled="loader" @click="switchRoles()">{{$t('message.save')}}</v-btn>
                    <v-btn color="white" :disabled="loader" @click="userRolesDialogActivator = false">{{$t('message.cancel')}}</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    <!-- CAMBIAR ROLES -->

        <app-section-loader :status="loader"></app-section-loader>

        <v-snackbar v-model="notificationData.activator" :color="notificationData.color" :timeout="4000" :top="true" :right="true">
            {{notificationData.message}}
            <v-icon class="ml-2" small @click="notificationData.activator = false">mdi-close</v-icon>
        </v-snackbar>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import { getCurrentAppLayout } from "Helpers/helpers";

    export default {
        name: 'Users',

        data () {
            return {
                loader: true,

                notificationData: { color: '', message: '',	activator: false, },

                userAuth: null, //Información del usuario autenticado

                searchUser: null, //Buscador de usuarios

                usersTableHeader: [
                    {text: "Nombre",   value: "name",        sortable: false, filterable: true,  align: 'start',},
                    {text: "Apellido", value: "last_name",   sortable: false, filterable: true,  align: 'start',},
                    {text: "Correo",   value: "email",       sortable: false, filterable: false, align: 'start',},
                    {text: "Teléfono", value: "phone",       sortable: false, filterable: false, align: 'start',},
                    {text: "Roles",    value: "user.roles",  sortable: false, filterable: false, align: 'start',},
                    {text: "Estado",   value: "status",      sortable: false, filterable: false, align: 'start',},
                    {text: "Acciones", value: "actions",     sortable: false, filterable: false, align: 'start',},
                ],

                userListItems: [],

                userRolesDialogActivator: false, //Mostrar/Ocultar Dialog para modificar Roles de un Usuario
                avaliableRoles: [], //Listado de Roles del Sistema
                userRolesData: [], //Información referente a los roles de un usuario en específico

                deleteUserDialog: false, //Mostar&Ocultar Dialog para Borrar Usuario
                selectedUser: null, //Usuario seleccionado para una acción
            }
        },
        mounted() {
            this.userAuth = this.$store.state.auth.user; //información del usuario autenticado

            this.$store.dispatch("users/getUsersList").then(response => { 
                // this.$nextTick(function() {
                //     this.fillUserListItems();
                // });
            });

            this.$store.dispatch('roles/getRolesList').then(response => { 
                this.$nextTick(function() {
                    this.fillRolesList();
                });
            });

            setTimeout(() => (this.loader = false), 500);
        },

        computed:{
            ...mapGetters({
                usersList: "users/usersList",
                rolesList: "roles/rolesList"
            }),
        },

        methods:{
            getCurrentAppLayoutHandler() {
                return getCurrentAppLayout(this.$router);
            },

            fillRolesList() { //Acondicionar array de roles del sistema
                this.avaliableRoles = [];

                this.avaliableRoles = this.rolesList.map((role) => {
                    return { value: `${role.name}`, text: `${role.name}` };
                });
            },

            fillUserListItems() { //Excluir Usuario de Rol 'Empresas'
                this.userListItems = [];

                this.usersList.forEach( (user, index) => {
                    let userRoles = user.roles.map((role) => { //Array con los Roles del usuario
                        return role.name;
                    });

                    if (!(userRoles.includes('Empresa'))) //Si el usuario NO cuenta con el Rol de Empresa
                    { this.userListItems.push(user); }
                });
            },

            openRolesDialog(user) { //Abrir Dialog para edición de Roles de un usuario
                var roles = [];

                user.roles.forEach( (role, index) => { //Buscar los nombres de los roles que posee el usuario
                    roles.push(role.name)
                });

                this.userRolesData = { 'userId': user.id, 'userName': user.name, 'userRoles': roles, }

                this.userRolesDialogActivator = true; //Abrir dialog
            },

            switchRoles() { //Cambiar la Información de Roles de un Usuario
                try {
                    this.loader = true; //Activar loader

                    this.$store.dispatch("roles/switchRoles", this.userRolesData).then(response => {
                        switch (response.data.status) {
                            case 'OK':
                                this.notificationData = {color: response.data.color, message: response.data.message, activator: true}
                            break;
                            default:
                                this.$swal({icon: 'error', title: 'Oops...', text: response.data.message,});
                            break;
                        }

                        setTimeout(() => {
                            if (response.data.status == 'OK') {
                                this.$store.dispatch("auth/authenticatedUser"); //Actualizo la información del usuario autenticado
                                this.$store.dispatch("users/getUsersList");

                                this.userRolesDialogActivator = false; //Cerrar dialog

                                this.loader = false;
                            }
                        }, 1000);
                    }).catch(response => { //Aqui se maneja el error del Front
                        setTimeout(() => (this.loader = false), 1000); //Tiempo de espera para desactivar Loader
                        console.log("Error en el Front", response);
                        this.$swal({icon: 'error', title: 'Oops...', text: 'Ha ocurrido un error previo al envio de información.',});
                        // this.notificationData = {color: 'error', message: 'Ha ocurrido un error durante el envio de información.', activator: true}
                    });

                } catch (error) {
                    setTimeout(() => (this.loader = false), 1000); //Tiempo de espera para desactivar Loader
                    console.log("Error antes de llamar al Vuex Store", error);
                    this.$swal({icon: 'error', title: 'Oops...', text: 'Ha ocurrido un error previo al envio de información.',});
                    // this.notificationData = {color: 'error', message: 'Ha ocurrido un error previo al envio de información.', activator: true}
                }
            },

            checkUserDelete(user) { //Dialog de Confirmación para borrar usuario
                this.selectedUser = user,
                this.deleteUserDialog = true;
            },

            deleteUser() {
                try {
                    this.loader = true; //Activar loader

                    this.$store.dispatch("users/deleteUser", this.selectedUser.id).then(response => {
                        switch (response.data.status) {
                            case 'OK':
                                this.notificationData = {color: response.data.color, message: response.data.message, activator: true}
                            break;
                            default:
                                this.$swal({icon: 'error', title: 'Oops...', text: response.data.message,});
                            break;
                        }

                        setTimeout(() => {
                            this.$store.dispatch("users/getUsersList"); //Todos Usuarios
                            this.deleteUserDialog = false;
                            this.loader = false;
                        }, 1000);
                    }).catch(response => { //Aqui se maneja el error del Front
                        setTimeout(() => (this.loader = false), 1000); //Tiempo de espera para desactivar Loader
                        console.log("Error en el Front", response);
                        this.notificationData = {color: 'error', message: 'Ha ocurrido un error durante el envio de información.', activator: true}
                    });
                } catch (error) {
                    setTimeout(() => (this.loader = false), 1000); //Tiempo de espera para desactivar Loader
                    console.log("Error antes de llamar al Vuex Store", error);
                    this.notificationData = {color: 'error', message: 'Ha ocurrido un error previo al envio de información.', activator: true}
                }
            },
        },
    }
</script>

