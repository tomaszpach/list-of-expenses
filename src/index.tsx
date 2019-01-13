import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

class HelloData {
    @observable clickedCount:number = 0;
    @observable titleInput:string = 'test';
    @observable amountInput:number = 20;
    @observable summaryPln:number = 0;
    @observable summaryEur:number = 0;
    @observable itemList:Array<{name:string, amount:number}> = [];

    @observable amount:number = 0;

    @action
    increment() {
        this.clickedCount++;
    }

    @action
    updateInput(e, inputType:string) {
        const value = e.target.value;
        inputType === 'title' ? this.titleInput = value : this.amountInput = parseFloat(value);
    }

    @action
    updateSummary() {
        console.log('this.amountInput', this.amountInput)
        console.log(typeof this.amountInput);
        this.summaryPln = this.summaryPln + this.amountInput;
        this.summaryEur = parseFloat((this.summaryPln / 4.382).toFixed(2));
    }
}

@observer
class Hello extends React.Component<{}> {
    data = new HelloData();

    formSubmit(e) {
        e.preventDefault();

        this.data.updateSummary();

        const name = this.data.titleInput;
        const amount = this.data.amountInput;
        console.log('submitted');
        this.data.itemList.push({name, amount})
        console.log(this.data.itemList.map(x => x))
    }

    render() {
        return (
            <div className="app-wrapper">
                <h2>List of expenses</h2>

                <form>
                    <label>
                        Title of transaction:
                    <input type="text" name="titleInput" value={this.data.titleInput} onChange={(e) => this.data.updateInput(e, 'title')} />
                    </label>

                    <label>
                        Amount (in PLN):
                    <input type="number" name="name" value={this.data.amountInput} onChange={(e) => this.data.updateInput(e, 'amount')} />
                    </label>
                    <input type="submit" value="Add" onClick={(e) => this.formSubmit(e)} />
                </form>

                <div className="table">
                    <div>New book about Rust</div>
                    <div>Snacks for footbal match</div>
                    <div>Bus ticket</div>
                    {this.data.itemList.map((item, index) => (
                        <div key={index}>{item.name}, amount: {item.amount}</div>
                    ))}
                </div>

                <div className="summary">
                    <h4>Sum: {this.data.summaryPln} PLN ({this.data.summaryEur} EUR)</h4>
                </div>


                <button onClick={() => this.data.increment()}>
                    Click count = {this.data.clickedCount}
                </button>
            </div>
        )
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'))