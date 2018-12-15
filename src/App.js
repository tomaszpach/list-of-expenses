import React, {Component} from 'react';
import {connect} from 'react-redux';

import Header from './components/Header/Header';

import './App.css';

class App extends Component {
    render() {
        const {title, eurPln} = this.props;
        return (
            <div className="App">
                {/* Header part */}
                <Header title={title} eurPln={eurPln} />

                {/* Inputs parts */}
                <form>
                    <label>
                        <span>Title of transaction:</span>
                        <input type="text" name="title" />
                    </label>
                    <label>
                        <span>Amount (in PLN):</span>
                        <input type="text" name="amount" />
                    </label>
                    <input type="submit" value="Add" />
                </form>

                {/* Table part */}
                <table>
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

const mapStateToProps = (reducerState) => {
    return {
        title: reducerState.title,
        eurPln: reducerState.eurPln
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);