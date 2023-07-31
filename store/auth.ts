import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $cookies} from '@/utils/nuxt-instance'
import { users} from '@/data'

type Token = string | null 

interface Payload {
    email: string
    password: string
}
@Module({ name: 'auth', stateFactory: true, namespaced: true,})
    export default class Auth extends VuexModule {
    private token = '' as Token
    public get $token() {
        return this.token
    }
    @Mutation
    private UPDATE_TOKEN( data: Token) {
        this.token = data
    } 
    @Action
    public create({email, password}: Payload) {
        const user = users.filter((user) =>{
            return user.email.toLocaleLowerCase().includes(email.toLocaleLowerCase())
        })
           if (!user[0]) return
           const accessToken = `${email}-${password}-token- jsjhshghghdghg`

           $cookies.set('token', accessToken, {
            path: '/',
            maxAge: 60*60*24*30, // 30 dias de validade
           })
              $cookies.set('user', user[0])
    }
    @Action 
    public update() {
        const token = $cookies.get('token') || null

        this.context.commit('UPDATE_TOKEN', token)
    }

    @Action
    public destroy() {
        $cookies.remove('token')
        $cookies.remove(user)

        this.context.commit('UPDATE_TOKEN', null)
    }
}