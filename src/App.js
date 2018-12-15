import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* Header part */}
                <header>
                    <h2>List of expenses</h2>
                    <span>1EUR = 4,382 PLN</span>
                </header>

                {/* Inputs parts */}
                <form>
                    <label>
                        Title of transaction:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Amount (in PLN):
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Add" />
                </form>

                {/* Table part */}
                <table id="customers">
                    <tbody>
                    <tr>
                        <th>Title</th>
                        <th>Amount(PLN)</th>
                        <th>Amount(EUR)</th>
                        <th>Options</th>
                    </tr>
                    <tr>
                        <td>New book about Rust</td>
                        <td>100</td>
                        <td>22.82</td>
                        <td>Delete</td>
                    </tr>
                    <tr>
                        <td>Snacks for a football match</td>
                        <td>20</td>
                        <td>4.56</td>
                        <td>Delete</td>
                    </tr>
                    <tr>
                        <td>Bus ticket</td>
                        <td>2.55</td>
                        <td>0.58</td>
                        <td>Delete</td>
                    </tr>
                    </tbody>
                </table>


                {/* Summary part */}
                <div>Sum: 122.55 PLN (27.96 EUR)</div>
            </div>
        );
    }
}

export default App;
