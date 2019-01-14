import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observable, action, computed } from 'mobx';
import { observer } from 'mobx-react';

// todo przygotuj opcję usuwania
class MobX {
    @observable titleInput:string = 'Example';
    @observable amountInput:number = 20;
    @observable summaryPln:number = 0;
    
    @observable amount:number = 0;
    // todo dodaj do tablicy losowo generowane ID
    @observable itemList:Array<{name:string, amount:number}> = [];

    @action
    updateTitleInput = e => {
        this.titleInput = e.target.value;
    }

    @action
    updateAmountInput = e => {
        this.amountInput = parseFloat(e.target.value);
    }

    @action 
    updateSummaryPln() {
        this.summaryPln = this.summaryPln + this.amountInput;
    }

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
    data = new MobX();


    formSubmit(e) {
        e.preventDefault();
        this.data.updateSummaryPln();

        const name = this.data.titleInput;
        const amount = this.data.amountInput;
        
        this.data.itemList.push({name, amount})
    }

    render() {
        return (
            <div className="app-wrapper">
                <h2>List of expenses</h2>

                <form>
                    <label>
                        Title of transaction:
                    <input type="text" name="titleInput" value={this.data.titleInput} onChange={this.data.updateTitleInput} />
                    </label>

                    <label>
                        Amount (in PLN):
                    <input type="number" name="amountInput" value={this.data.amountInput} onChange={this.data.updateAmountInput} />
                    </label>
                    <input type="submit" value="Add" onClick={(e) => this.formSubmit(e)} />
                </form>

                {this.data.amountC > 0 ? (
                    <div className="table">
                        {this.data.itemList.map((item, index) => (
                            <div key={index}>
                            {item.name}, amount: {item.amount}
                            </div>
                        ))}
                    </div>
                ) : null}

                <div className="summary">
                    <h4>Sum: {this.data.summaryPln} PLN ({this.data.summaryEur} EUR), amount: {this.data.amountC}</h4>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Expenses />, document.getElementById('root'))