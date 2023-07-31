import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $cookies} from '@/utils/nuxt-instance'

@Module({ name: 'theme', stateFactory: true, namespaced: true,})
    export default class Theme extends VuexModule {
    private darkMode = false 

    public get $single() {
        return this.darkMode
    }
    @Mutation
    private Set_SINGLE( data: boolean) {
        this.darkMode = data
    } 
    @Action
    public setTheme(darkMode: boolean) {
        this.context.commit('SET_SINGLE', darkMode)
    }
    @Action 
    public destroy() {}
} 