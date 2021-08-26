<style scoped>
    .roleActive {background: #5D92F4;}
    .roleActive .v-card__text {color: #ffffff;}
</style>

<template>
    <div>
        <page-title-bar></page-title-bar>
        <app-section-loader :status="loader"></app-section-loader>

        <v-container fluid class="pt-0">
            <v-row>
                <v-col cols="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-xs-12">
                    <v-card class="px-5">
                        <v-card-title>
                            <v-row align="center" justify="space-between">
                                <v-col xl="10" lg="10" md="10" sm="10" class="pa-0">
                                    <b>{{$t('message.roles')}}</b>
                                </v-col>
                                <v-col xl="2" lg="2" md="2" sm="2" class="text-center pa-0">
                                    <v-tooltip top>
                                        <template v-slot:activator="{ on }">
                                            <v-btn :disabled="!$Can('Crear Roles')" outlined x-small fab color="indigo" v-on="on" @click="openRoleDialog('Crear Rol')">
                                                <v-icon>mdi-plus</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>{{$t('message.create')}} {{$t('message.role')}}</span>
                                    </v-tooltip>                                    
                                </v-col>
                            </v-row>
                        </v-card-title>
                        <v-divider class="my-1"></v-divider>
                        <template v-if="$Can('Listar Roles')">
                            <v-row  justify="space-around" v-for="(role, index) in rolesList" :key="index">
                                <v-col xl="9" lg="9" md="8" sm="8">
                                    <v-card class="mx-auto" hover :class="[ roleSelected == role ? 'roleActive' : '' ]">
                                        <v-card-text @click="toggleRol(role)">
                                            <v-row align="center" justify="center">
                                                <b>{{role.name}}</b> 
                                            </v-row>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                                <v-col xl="3" lg="3" md="4" sm="4" align-self="center">
                                    <v-row justify="space-around">
                                        <v-tooltip top>
                                            <template v-slot:activator="{ on }">
                                                <v-btn :disabled="!$Can('Editar Roles')" outlined x-small fab color="green" v-on="on" @click="openRoleDialog('Editar Rol', role)">
                                                    <v-icon>mdi-pencil</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>{{$t('message.edit')}} {{$t('message.role')}}</span>
                                        </v-tooltip>
                                        <v-tooltip top>
                                            <template v-slot:activator="{ on }">
                                                <v-btn :disabled="!$Can('Borrar Roles')" outlined x-small fab color="red" v-on="on" @click="openRoleDialog('Borrar Rol', role)">
                                                    <v-icon>mdi-close</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>{{$t('message.delete')}} {{$t('message.role')}}</span>
                                        </v-tooltip>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </template>
                        <v-card-text v-else>
                            {{$t('message.Youdonothavethenecessarypermissionstoviewthislist')}}.
                        </v-card-text>
                    </v-card>
                </v-col>

                <v-col v-if="roleSelected!=null" cols="col-xl-9 col-lg-9 col-md-9 col-sm-8 col-xs-12">
                    <app-card :heading="'Permisos del Rol [ '+roleSelected.name+' ]'" colClasses="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <v-card class="mx-auto mb-10" hover v-for="(module, index) in modulesList" :key="index">
                            <v-card-title>
                                {{[$t(module.name)]}}
                            </v-card-title>

                            <v-list>
                                <v-list-group prepend-icon="fas fa-list" v-for="(section, index) in module.sections" :key="index">
                                    <template v-slot:activator>
                                        <v-list-item-title>{{$t('message.Section')}} {{$t(section.name)}}</v-list-item-title>
                                    </template>

                                    <v-list-group no-action sub-group v-for="(route, index) in section.routes" :key="index">
                                        <template v-slot:activator>
                                            <v-list-item-content>
                                                <v-list-item-title>{{$t(route.name)}}</v-list-item-title>
                                            </v-list-item-content>
                                        </template>

                                        <v-list-item>
                                            <v-list flat>
                                                <v-list-item-group multiple active-class="">
                                                    <template v-if="route.actions.length > 0">
                                                        <v-list-item v-for="(permission, index) in roleSelectedPermissionStatus(route)" :key="index">
                                                            <v-list-item-action>
                                                                <v-checkbox color="primary" :disabled="!$Can('Cambiar Permisos Roles')" v-model="permission.state" @change="switchPermission(permission)"></v-checkbox>
                                                            </v-list-item-action>

                                                            <v-list-item-content>
                                                                <v-list-item-title v-text="permission.name"></v-list-item-title>
                                                            </v-list-item-content>

                                                            <v-list-item-action>
                                                                <v-tooltip top>
                                                                    <template v-slot:activator="{ on }">
                                                                        <v-btn :disabled="!$Can('Cambiar Permisos Roles')" class="mx-2" icon v-on="on" @click="openActionRouteDialog(permission)">
                                                                            <v-icon small color="green">mdi-pencil</v-icon>
                                                                        </v-btn>
                                                                    </template>
                                                                    <span>{{$t('message.edit')}} {{$t('message.name')}}</span>
                                                                </v-tooltip>
                                                            </v-list-item-action>
                                                        </v-list-item>
                                                    </template>
                                                    <v-list-item v-else>
                                                        <v-list-item-content>
                                                            <v-list-item-title :v-text="$t('message.Theroutedoesnothaveactionstoassignaspermissions')"></v-list-item-title>
                                                        </v-list-item-content>
                                                    </v-list-item>
                                                </v-list-item-group>
                                            </v-list>
                                        </v-list-item>
                                    </v-list-group>
                                </v-list-group>
                            </v-list>
                        </v-card>
                    </app-card>
                </v-col>
            </v-row>
        </v-container>


    <!-- CREAR, EDITAR, ELIMINAR ROLES -->
        <v-dialog v-model="dialogRoleActivator" max-width="500" persistent>
            <v-card class="pa-4">
                <v-card-title class="headline px-0 pt-0">{{dialogRoleData.title}}</v-card-title>

                <v-card-text class="px-0 pt-0">
                    <ValidationObserver ref="roleForm">
                        <form @submit.prevent="">
                            <v-row>
                                <v-col cols="6">
                                    <ValidationProvider rules="required" v-slot="{ errors }">
                                        <v-text-field :label="$t('message.name')" name="nombre" v-model="dialogRoleData.roleName" :error-messages="errors" required></v-text-field>
                                    </ValidationProvider>
                                </v-col>
                                <v-col cols="6">
                                    <ValidationProvider rules="required" v-slot="{ errors }">
                                        <v-select :label="$t('message.status')" name="estado" v-model="dialogRoleData.roleStatus" :items="[{value:'1', text: $t('message.active')}, {value:'2', text: $t('message.inactive')}, {value:'3', text: $t('message.removed')}]" :error-messages="errors" required></v-select>
                                    </ValidationProvider>
                                </v-col>
                                <v-col cols="12">
                                    <ValidationProvider rules="required" v-slot="{ errors }">
                                        <v-textarea clearable counter rows="2" row-height="18" :label="$t('message.description')" v-model="dialogRoleData.roleDescription" :error-messages="errors"></v-textarea>
                                    </ValidationProvider>
                                </v-col>
                            </v-row>
                        </form>
                    </ValidationObserver>
                </v-card-text>

                <v-card-actions class="pa-0">
                    <v-spacer></v-spacer>
                    <v-btn type="submit" color="primary" @click="confirmDialog(dialogRoleData.confirm)">{{dialogRoleData.confirm}}</v-btn>
                    <v-btn color="error" @click="dialogRoleActivator = false">{{$t('message.cancel')}}</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    <!-- CREAR, EDITAR, ELIMINAR ROLES -->

    <!-- CAMBIAR NOMBRE DE ACCIÓN DE RUTA -->
        <v-dialog v-model="dialogActionRouteActivator" max-width="400" persistent>
            <v-card class="pa-4">
                <v-card-title class="headline px-0 pt-0">{{$t('message.edit')}} {{$t('message.ActionName')}}</v-card-title>
                <v-card-text class="px-0 pt-7">
                    <ValidationObserver ref="actionNameForm">
                        <form @submit.prevent="">
                            <ValidationProvider rules="required" v-slot="{ errors }"> 
                                <v-text-field outlined :label="$t('message.ActionName')" v-model="dialogActionRouteData.newName" :error-messages="errors" required></v-text-field>
                            </ValidationProvider>
                        </form>
                    </ValidationObserver>
                </v-card-text>
                <v-card-actions class="pa-0">
                    <v-spacer></v-spacer>
                    <v-btn type="submit" color="primary" @click="updateActionRouteName()">{{$t('message.edit')}}</v-btn>
                    <v-btn color="error" @click="dialogActionRouteActivator = false">{{$t('message.cancel')}}</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    <!-- CAMBIAR NOMBRE DE ACCIÓN DE RUTA -->
    </div>
</template>

<script>
import { mapState } from "vuex";
import { required, } from 'vee-validate/dist/rules'
import { ValidationObserver, ValidationProvider, setInteractionMode, extend } from 'vee-validate'
setInteractionMode('eager');
extend('required', {...required, message: 'El campo es requerido'});

export default {
    name: 'Roles',
    components: {
        ValidationProvider,
        ValidationObserver,
    },
    data() {
        return {
            loader: true,

            roleSelected: null,         //Rol seleccionado para visualizar permisos
            dialogRoleData: {},         //Información del Rol para las acciones de [Crear, Editar, Eliminar]
            dialogRoleActivator: false, //Activador del Dialog de Roles

            dialogActionRouteData: {}, //Información de la Acción de una Ruta
            dialogActionRouteActivator: false, //Activador del Dialog de la Acción de una Ruta
        }
    },

    async mounted() {
        await this.$store.dispatch('modules/getModulesList');
        await this.$store.dispatch('roles/getRolesList');

        this.loader = false;
    },

    computed: {
        ...mapState('modules', ['modulesList']),
        ...mapState('roles', ['rolesList']),
    },

    methods: {
        toggleRol(role) {
            if (role == this.roleSelected) //Si ha hecho click en el mismo roll, volvemos null el seleccionado
            {   this.roleSelected = null;   }
            else //Sino, almacenamos el seleccionado
            {   this.roleSelected = role;   }
        },
        openRoleDialog(action, role) { //Manejo de acciones [Crear, Editar, Eliminar] Roles
            this.dialogRoleData = {}; //Inicializo

            if (!role) {
                this.dialogRoleData = {
                    'title': action,
                    'confirm': action.split(' ')[0],
                    'roleName': '',
                    'roleStatus': '',
                    'roleDescription': '',
                }
            } else {
                this.dialogRoleData = {
                    'title': action,
                    'confirm': action.split(' ')[0],
                    'roleId': role.id,
                    'roleName': role.name,
                    'roleStatus': role.status,
                    'roleDescription': role.description,
                }
            }
            this.dialogRoleActivator = true; //Abrir Dialog
        },
        confirmDialog(action) { //Ejecución de Acciones sobre un Rol [Crear, Editar, Eliminar]
            this.$refs.roleForm.validate().then(success => {
                if (success == true) {
                    switch (action) {
                        case 'Crear':
                            this.$store.dispatch('roles/storeRole', this.dialogRoleData);
                        break;
                        case 'Editar':
                            this.$store.dispatch('roles/updateRole', this.dialogRoleData);
                        break;
                        case 'Borrar':
                            this.$store.dispatch("roles/deleteRole", this.dialogRoleData.roleId);
                        break;
                    }
                    this.$refs.roleForm.reset()
                    this.$store.dispatch('roles/getRolesList'); //Actualizo información de Roles en el sistema
                    this.dialogRoleActivator = false; //Cerrar Dialog
                }
            });
        },
        roleSelectedPermissionStatus:function (route) { //Verificamos cuáles Permisos de la Ruta el Rol tiene activos y cuales no
            var routePermissions = []; var activePermissions = [];

            this.roleSelected.permissions.forEach( (permission, index) => { //Recorremos el Rol seleccionado y almacenados todos los permisos que tiene de la Ruta en un array de strings
                if (permission.route_id == route.id)
                {   routePermissions.push(permission.name);  }
            });

            route.actions.forEach( (action, index) => { //Recorremos las Acciones posibles de una Ruta y verificamos con cuáles cuenta el Rol seleccionado
                if ( routePermissions.indexOf(action.name) > -1 ) //Activo
                {   activePermissions.push({name: action.name, roleId: this.roleSelected.id, routeId: action.route_id, actionId: action.action_id, state: true});   }
                else //Inactivo
                {   activePermissions.push({name: action.name, roleId: this.roleSelected.id, routeId: action.route_id, actionId: action.action_id, state: false});   }
            });

            return activePermissions;
        },
        switchPermission(permission) { //Cambiar estado de un Permiso en un Rol
            this.$store.dispatch('roles/switchPermission', permission).then(response => {
                this.$store.dispatch("auth/authenticatedUser"); //Actualizo la información del usuario autenticado (En caso de que haya cambiado sus propios permisos)
            });
        },
        openActionRouteDialog(permission) {
            this.dialogActionRouteData = {}; //Inicializo

            this.dialogActionRouteData = {
                'newName': permission.name,
                'actionName': permission.name,
                'actionId': permission.actionId,
                'routeId': permission.routeId,
            };

            this.dialogActionRouteActivator = true; //Abrir Dialog
        },
        updateActionRouteName() {
            this.$refs.actionNameForm.validate().then(success => {
                if (success == true) {
                    this.$store.dispatch('actionRoutes/updateActionRoute', this.dialogActionRouteData).then(response => {
                        this.$store.dispatch('roles/getRolesList'); //Actualizamos la data de los permisos de los Roles
                        this.$store.dispatch('modules/getModulesList'); //Actualizamos la data del panel de permisos (Aqui viene la información de las rutas para el panel)
                    });

                    this.roleSelected = null; //Esto cerrara el panel de permiso, lo que permitira que se refresque el nombre de la Acción y el permiso el Rol
                    this.dialogActionRouteActivator = false; //Cerrar Dialog
                }
            });            
        }
    },
}
</script>