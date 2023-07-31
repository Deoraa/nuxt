import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

import { FilesProps, files} from '@/data'

@Module({ name: 'files', stateFactory: true, namespaced: true,})
    export default class Files extends VuexModule {
    private files = [] as FilesProps[]
    private file = {} as FilesProps 

    public get $all() {
        return this.files
    }

    public get $single() {
        return this.file
    }

    @Mutation 
    private Set_All(data: FilesProps[]) {
        this.files = data
    }

    @Mutation
    private Set_SINGLE( data: FilesProps) {
        this.file = data
    }
    @Action
    public index(projectId: string) {
        const filterFiles = files.filter((file) =>{
            if (file.ownerId === Number(projectId)) {
                return file 
            }
        })
        this.context.commit('Set_All', filterFiles)
    }
    @Action
    public create(payload: FilesProps) {
        this.context.commit('SET_SINGLE', payload)
    }
    @Action
    public update(payload: FilesProps) {
        this.context.commit('SET_SINGLE', payload) }

    @Action 
    public destroy(id: number) {
        this.context.commit('SET_SINGLE', null)
}
}
