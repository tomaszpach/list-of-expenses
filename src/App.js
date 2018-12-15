import React, {Component} from 'react';
import {connect} from 'react-redux';

import Header from './components/Header/Header';
import Inputs from './components/Inputs/Inputs';
import Table from './components/Table/Table';
import Summary from './components/Summary/Summary';

import './App.css';

// todo przygotuj opcje zmiany wartosci EURO

class App extends Component {
    render() {
        const {title, eurPln, transactions} = this.props;
        return (
            <div className="App">
                <Header title={title} eurPln={eurPln} />
                <Inputs />
                <Table onDelete={(id) => this.props.deleteExpense(id)} transactions={transactions} eurPln={eurPln}/>
                <Summary transactions={transactions} eurPln={eurPln}/>
                <button onClick={() => this.props.updateCurrency()}>change to 4.412</button>
            </div>
        );
    }
}

const mapStateToProps = (reducerState) => {
    return {
        title: reducerState.title,
        eurPln: reducerState.eurPln,
        transactions: reducerState.transactions
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteExpense: (id) => {
            dispatch({type: 'DELETE_EXPENSE', id: id})
        },
        updateCurrency: (value) => {
            dispatch({type: 'UPDATE_CURRENCY', value: value})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);