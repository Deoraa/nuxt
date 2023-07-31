import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

import { ProjectsProps, projects} from '@/data'

@Module({ name: 'projects', stateFactory: true, namespaced: true,})
    export default class Projects extends VuexModule {
    private projects = [] as  ProjectsProps[]
    private project
     = {} as  ProjectsProps 

    public get $all() {
        return this.project
        
    }

    public get $single() {
        return this.project
    }

    @Mutation 
    private Set_All(data:  ProjectsProps[]) {
        this.projects
 = data
    }

    @Mutation
    private Set_SINGLE( data:  ProjectsProps) {
        this.project = data
    }
    @Action
    public index(query: string) {
        let filterprojects = projects
        
        filterprojects = projects.filter((project) =>{
            return project.projectName
            .toLocaleLowerCase()
            .includes(query.toLocaleLowerCase())
        })
        this.context.commit('Set_All', filterprojects)
    }
    @Action
    public create(payload:  ProjectsProps) {
        this.context.commit('SET_SINGLE', payload)
    }
    @Action
    public update(payload:  ProjectsProps) {
        this.context.commit('SET_SINGLE', payload) }

    @Action 
    public destroy(id: number) {
        this.context.commit('SET_SINGLE', null)
}
}