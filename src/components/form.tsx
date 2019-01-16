import * as React from 'react';
import expenses from '../mobx/store';

class Form extends React.Component<{expenses}> {
    formSubmit = e => {
        e.preventDefault();

        const name = expenses.titleInput;
        const amount = expenses.amountInput;
        const id = Date.now();

        expenses.itemList.push({name, amount, id});
    };

    render() {
        return (
            <div className="app-wrapper">
                <form onSubmit={(e) => this.formSubmit(e)}>
                    <label>
                        Title of transaction:
                        <input type="text" name="titleInput" value={expenses.titleInput}
                               onChange={expenses.updateTitleInput}/>
                    </label>

                    <label>
                        Amount (in PLN):
                        <input type="number" name="amountInput" value={expenses.amountInput}
                               onChange={expenses.updateAmountInput}/>
                    </label>
                    <input type="submit" value="Add"/>
                </form>
            </div>
        )
    }
}

export default Form;