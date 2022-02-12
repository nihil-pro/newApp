import { autorun, makeAutoObservable, runInAction } from "mobx";

class Store {
    data?: any

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true})
        autorun(() => this.setData())
    }

    setData = async () => {
        runInAction(() => this.data = 1)
    }

    increase() {
        runInAction(() => {
            this.data = this.data + 1
        })
    }
}

export default new Store()