import { observable, action, computed } from 'mobx';

export class SplitPayment {
    @observable total:number = 0

    @action
    updateTotal(value:number) {
        this.total += this.total;
    }

    @computed get total() {
        return this.total;
    }
}