import { action, thunk } from 'easy-peasy'



const AuthModel = {
    isAuth: false,
    token: null,
    user: {},
    login: thunk((actions, payload) => {
        const authInfo = {
            token: "Bearer Token",
            user: {
                name: 'Admin',
                email: 'admin@gmail.com'
            }
        }
        actions.setLogin(authInfo)
    }),
    setLogin: action((state, payload) => {
        state.isAuth = true
        state.token = payload.token,
            state.user = payload.user
    }),
    logout: action((state, payload) => {
        state.isAuth = false
        state.token = null,
            state.user = {}
    })
}

export default AuthModel