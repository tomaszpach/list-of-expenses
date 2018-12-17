import React, {Component} from 'react';
import {connect} from 'react-redux';

import Header from './components/Header/Header';
import Inputs from './components/Inputs/Inputs';
import Table from './components/Table/Table';
import Summary from './components/Summary/Summary';
import Conversion from './components/Conversion/Conversion';

import './App.css';

class App extends Component {
    state = {
        conversion: ''
    };

    updateInput(e) {
        const value = e.target.value;

        this.setState({
            conversion: value
        })
    }

    updateCurrency(e) {
        e.preventDefault();
        this.props.updateCurrency(this.state.conversion)
    }

    render() {
        const {title, eurPln, transactions} = this.props;
        return (
            <div className="App">
                <Header title={title} eurPln={eurPln}/>
                <Inputs/>
                <Table onDelete={(id) => this.props.deleteExpense(id)} transactions={transactions} eurPln={eurPln}/>

                {transactions.length > 0 ?
                    <Summary transactions={transactions} eurPln={eurPln}/> :
                    <h2>Add some expenses to see summary</h2>
                }

                <Conversion onChange={(e) => this.updateInput(e)} onSubmit={(ref) => this.updateCurrency(ref)}/>
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
        updateCurrency: (eurPln) => {
            dispatch({type: 'UPDATE_CURRENCY', eurPln: eurPln})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
