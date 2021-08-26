import { mapState } from "vuex";

export default {
    computed: {
        ...mapState('auth', ['roles']), //Roles del Usuario Autenticado en el Sistema
    },
    methods: {
        $HasRole(roleRequest) {
            const Roles = this.roles;

            // console.log("Roles del Usuario Autenticado", Roles)

            if ( (Roles != null) && (Roles != undefined) && (Roles !== 'undefined') && (Roles != false) ) {
                // console.log("Rol Solicitado: ", roleRequest);
                // console.log("Roles Disponibles del Usuario", this.roles);

                let result = null;

                if (Array.isArray(roleRequest)) { //Array de Roles a Comparar con los Roles del Usuario
                    result = Roles.some(roleName => roleRequest.indexOf(roleName) >= 0);
                } else { //Nombre de Rol a Comparar con los Roles del Usuario
                    result = Roles.find(roleName => roleName === roleRequest);
                }

                if (result !== undefined)
                {   return true;    } //Rol encontrado, brindando acceso
                else
                {   return false;   } //Rol no encontrado, negando acceso
            } else {
                return false;
            }
        },
    },
};
