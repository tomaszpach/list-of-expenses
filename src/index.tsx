import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import ExpensesMobX from './mobx/store';


@observer
class Expenses extends React.Component<{}> {
    expenses = new ExpensesMobX();

    formSubmit(e) {
        e.preventDefault();

        const name = this.expenses.titleInput;
        const amount = this.expenses.amountInput;
        const id = Date.now();
        
        this.expenses.itemList.push({name, amount, id});
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
                            <div onDoubleClick={() => this.expenses.deleteItem(item.id)}
                                key={index}>
                                {item.name}, amount: {item.amount}
                            </div>
                        ))}
                        (Double click to delete)
                    </div>
                ) : null}

                <div className="summary">
                    <h4>Sum: {this.expenses.summaryPln} PLN ({this.expenses.summaryEur} EUR), amount: {this.expenses.amountC}</h4>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Expenses />, document.getElementById('root'));