import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import expenses from './mobx/store';

import Form from './components/form';


@observer
class Expenses extends React.Component<{}> {
    render() {
        return (
            <div className="app-wrapper">
                <h2>List of expenses</h2>

                <Form expenses={expenses}/>

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

ReactDOM.render(<Expenses />, document.getElementById('root'));