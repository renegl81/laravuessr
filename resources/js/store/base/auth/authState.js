export default {
    user:         JSON.parse( localStorage.getItem('user') ),           //Usuario Autenticado
    roles:        JSON.parse( localStorage.getItem('roles') ),          //Roles del Usuario Autenticado
    permissions:  JSON.parse( localStorage.getItem('permissions') ),    //Permisos del Usuario Autenticado
    access_token: localStorage.getItem('access_token'),                 //Token Passport del Usuario
    expires_at:   localStorage.getItem('expires_at'),                   //Fecha de Expiración del Token    

    isUserSigninWithAuth0: Boolean(localStorage.getItem('isUserSigninWithAuth0'))
}
