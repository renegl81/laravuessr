import auth0 from 'auth0-js'
import { AUTH_CONFIG } from './auth0-variables'
import EventEmitter from 'eventemitter3'
import router from '../router'
import { store } from '../store/store';

class AuthService {

  constructor() {
    this.authNotifier = new EventEmitter()

    this.authenticated = this.isAuthenticated()

    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.setSession = this.setSession.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)


    this.auth0 = new auth0.WebAuth({
      scope:        'openid',
      domain:        AUTH_CONFIG.domain,
      clientID:      AUTH_CONFIG.clientId,
      audience:     `https://${AUTH_CONFIG.domain}/userinfo`,
      redirectUri:   AUTH_CONFIG.callbackUrl,
      responseType: 'token id_token',
    })
  }

  login() {
    this.auth0.authorize()
  }

  handleAuthentication() {
    let location = router.history.current.fullPath;
    let path = location.split("/")

    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult)
          router.replace('/app/' + path[1] + '/home');
      } else if (err) {
        console.log('handleAuthentication err', err)
        router.replace('/app/' + path[1] + '/home');
        alert(`Error: ${err.error}. Check the console for further details.`)
      }
    })
  }

  setSession(authResult) {
    store.dispatch('signInUserWithAuth0', authResult)
    localStorage.setItem('isUserSigninWithAuth0', true)
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    )
    localStorage.setItem('access_token', authResult.accessToken)
    localStorage.setItem('id_token', authResult.idToken)
    localStorage.setItem('expires_at', expiresAt)
    this.authNotifier.emit('authChange', { authenticated: true })
  }

  logout() {
    store.dispatch('signOutUserFromAuth0')
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
    this.userProfile = null
    this.authNotifier.emit('authChange', false)
    // navigate to the home route
    router.push('/app/session/login')
  }

  isAuthenticated() {  //Verifica si el usuario esta autenticado o no
    // Check if token and expired date exist
    if ( (localStorage.getItem("access_token") !== null) && (localStorage.getItem("expires_at") !== null) ) {

      let expiresAt = localStorage.getItem('expires_at');

      // Check whether the current time is past
      return new Date().getTime() < expiresAt;
    } else
    {  return false;  }
  }
}

export default AuthService;
