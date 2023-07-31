import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

import {UserProps , users} from '@/data'

@Module({ name: 'users', stateFactory: true, namespaced: true,})
    export default class Users extends VuexModule {
    private users = [] as  UserProps[]
    private user

     = {} as  UserProps 

    public get $all() {
        return this.user

        
    }

    public get $single() {
        return this.user

    }

    @Mutation 
    private Set_All(data:  UserProps[]) {
        this.users
 = data
    }

    @Mutation
    private Set_SINGLE( data:  UserProps) {
        this.user = data
    }
    @Action
    public index() {
        this.context.commit('Set_All', users)
    }
    @Action
    public create(payload:  UserProps) {
        this.context.commit('SET_SINGLE', payload)
    }
    @Action
    public update(payload:  UserProps) {
        this.context.commit('SET_SINGLE', payload) }

    @Action 
    public destroy(id: number) {
        this.context.commit('SET_SINGLE', null)
}
}