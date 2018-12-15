import React, {Component} from 'react';
import {connect} from 'react-redux';

import Header from './components/Header/Header';
import Inputs from './components/Inputs/Inputs';
import Table from './components/Table/Table';
import Summary from './components/Summary/Summary';

import './App.css';

class App extends Component {
    render() {
        const {title, eurPln, transactions} = this.props;
        return (
            <div className="App">
                <Header title={title} eurPln={eurPln} />
                <Inputs />
                <Table transactions={transactions} eurPln={eurPln}/>
                <Summary transactions={transactions} eurPln={eurPln}/>
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

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);