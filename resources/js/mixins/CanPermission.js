import { mapState } from "vuex";
import router from "../router/";

export default {
    computed: {
        ...mapState('auth', ['permissions']), //Permisos del Usuario Autenticado en el Sistema
    },
    methods: {
        $Can(permissionsRequest) {
            const Permissions = this.permissions;

            if ( (Permissions != null) && (Permissions != undefined) && (Permissions !== 'undefined') && (Permissions != false) ) {
                // console.log("Permiso Solicitado: ", permissionsRequest);
                // console.log("Permisos Disponibles del Usuario", this.permissions);
                const Result = Permissions.find(permissionName => permissionName === permissionsRequest);

                if (Result !== undefined)
                {   return true;    } //Permiso encontrado, brindando acceso
                else
                {   return false;   } //Permiso no encontrado, negando acceso
            }
        },
    },
};
