import * as React from 'react';
import { observer } from "mobx-react";
import { AppStateComponent } from "../Context";

@observer
class Form extends AppStateComponent {
    formSubmit = e => {
        e.preventDefault();

        const expenses = this.appState;
        const name = expenses.titleInput;
        const amount = expenses.amountInput;
        const id = Date.now();

        expenses.itemList.push({name, amount, id});
    };

    render() {
        const expenses = this.appState;
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