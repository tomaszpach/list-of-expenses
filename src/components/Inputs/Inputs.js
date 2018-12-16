import React, {Component} from 'react';
import {connect} from 'react-redux';

import Input from './_input';

class Inputs extends Component {
    state = {
        title: '',
        value: ''
    };

    updateInput(type, e) {
        const value = e.target.value;
        this.setState({
            [type]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const expense = {
            title: this.state.title,
            value: parseFloat(this.state.value),
            id: Date.now()
        };

        this.props.addExpense(expense);
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <Input title="Title of transaction:" pattern=".{5,50}" inputTitle="Minimum 5 characters"
                       type="text" name="title"
                       placeholder="Please type title (minimum 5 characters)" onChange={(e) => this.updateInput('title', e)}/>

                <Input title="Amount (in PLN):" step=".01" inputTitle="Up to 2 numbers after the decimal"
                       type="number" name="amount"
                       placeholder="Type amount" onChange={(e) => this.updateInput('value', e)}/>
                <input type="submit" value="Add"/>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addExpense: (expense) => {
            dispatch({type: 'ADD_EXPENSE', expense: expense})
        }
    }
};

export default connect(null, mapDispatchToProps)(Inputs);
