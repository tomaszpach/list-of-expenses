import {action, computed, observable} from "mobx";

// todo dodaj konwersję dla Euro
export default class ExpensesMobX {
    @observable titleInput:string = 'Example';
    @observable amountInput:number = 20;
    @observable conversion:number = 4.382;

    @observable amount:number = 0;
    @observable itemList:Array<{name:string, amount:number, id:number}> = [];

    @action
    updateTitleInput = e => {
        this.titleInput = e.target.value;
    };

    @action
    updateAmountInput = e => {
        this.amountInput = parseFloat(e.target.value);
    };

    @action
    deleteItem(id) {
        this.itemList = this.itemList.filter(item => {
            return item.id !== id;
        })
    }

    @computed get summaryPln() {
        let summaryPln = 0;

        this.itemList.map(item => {
            summaryPln = summaryPln + item.amount;
            return summaryPln;
        });

        return summaryPln;
    };

    // Get Summary Euro
    @computed get summaryEur() {
        return parseFloat((this.summaryPln / this.conversion).toFixed(2));
    }

    // Get items list amount
    @computed get amountC() {
        return this.amount = this.itemList.length;
    }
}