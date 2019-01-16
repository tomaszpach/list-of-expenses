import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observable, action, computed } from 'mobx';
import { observer } from 'mobx-react';

// todo przygotuj opcję usuwania
// todo dodaj konwersję dla Euro
class ExpensesMobX {
    @observable titleInput:string = 'Example';
    @observable amountInput:number = 20;
    @observable summaryPln:number = 0;
    
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

    @action 
    updateSummaryPln() {
        this.summaryPln = this.summaryPln + this.amountInput;
    };

    // Get Summary Euro
    @computed get summaryEur() {
        return parseFloat((this.summaryPln / 4.382).toFixed(2));
    }

    // Get items list amount
    @computed get amountC() {
        return this.amount = this.itemList.length;
    }
}

@observer
class Expenses extends React.Component<{}> {
    expenses = new ExpensesMobX();


    formSubmit(e) {
        e.preventDefault();
        this.expenses.updateSummaryPln();

        const name = this.expenses.titleInput;
        const amount = this.expenses.amountInput;
        const id = Date.now();
        
        this.expenses.itemList.push({name, amount, id})
    }

    render() {
        return (
            <div className="app-wrapper">
                <h2>List of expenses</h2>

                <form>
                    <label>
                        Title of transaction:
                    <input type="text" name="titleInput" value={this.expenses.titleInput} onChange={this.expenses.updateTitleInput} />
                    </label>

                    <label>
                        Amount (in PLN):
                    <input type="number" name="amountInput" value={this.expenses.amountInput} onChange={this.expenses.updateAmountInput} />
                    </label>
                    <input type="submit" value="Add" onClick={(e) => this.formSubmit(e)} />
                </form>

                {this.expenses.amountC > 0 ? (
                    <div className="table">
                        {this.expenses.itemList.map((item, index) => (
                            <div onClick={() => this.expenses.deleteItem(item.id)}
                                key={index}>
                                {item.name}, amount: {item.amount}
                            </div>
                        ))}
                    </div>
                ) : null}

                <div className="summary">
                    <h4>Sum: {this.expenses.summaryPln} PLN ({this.expenses.summaryEur} EUR), amount: {this.expenses.amountC}</h4>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Expenses />, document.getElementById('root'))