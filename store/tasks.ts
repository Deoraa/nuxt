import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

import { TasksProps, tasks} from '@/data'

@Module({ name: 'tasks', stateFactory: true, namespaced: true,})
    export default class Tasks extends VuexModule {
    private tasks = [] as TasksProps
    []
    private file = {} as TasksProps


    public get $all() {
        return this.tasks
    }

    public get $single() {
        return this.task
    }

    @Mutation 
    private Set_All(data: TasksProps
        []) {
        this.tasks = data
    }

    @Mutation
    private Set_SINGLE( data: TasksProps
        ) {
        this.task = data
    }
    @Action
    public index(projectId: string) {
        const filtertasksq = tasks.filter((task) =>{
            if (task.projectId === Number(projectId)) {
                return task 
            }
        })
        this.context.commit('Set_All', filtertasks)
    }
    @Action
    public create(payload: TasksProps
        ) {
        this.context.commit('SET_SINGLE', payload)
    }
    @Action
    public update(payload: TasksProps
        ) {
        this.context.commit('SET_SINGLE', payload) }

    @Action 
    public destroy(id: number) {
        this.context.commit('SET_SINGLE', null)
}
}
