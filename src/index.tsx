import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import { ExpensesMobX } from "./mobx/store";

import Form from './components/form';
import { AppStateComponent, Provider } from "./Context";


// todo add emotion.js
@observer
class Expenses extends AppStateComponent {
    render() {
      const expenses = this.appState;


        return (
            <div className="app-wrapper">
                <h2>List of expenses</h2>

                <Form />

                {expenses.amount > 0 ? (
                    <div className="table">
                        {expenses.itemList.map((item, index) => (
                            <div onDoubleClick={() => expenses.deleteItem(item.id)}
                                key={index}>
                                {item.name}, amount: {item.amount}
                            </div>
                        ))}
                        (Double click to delete)
                    </div>
                ) : null}

                <div className="summary">
                    <h4>Sum: {expenses.summaryPln} PLN ({expenses.summaryEur} EUR), amount: {expenses.amount}</h4>
                </div>
            </div>
        )
    }
}

const store = new ExpensesMobX();

ReactDOM.render(
  <Provider value={store}>
    <Expenses />
  </Provider>
, document.getElementById('root'));