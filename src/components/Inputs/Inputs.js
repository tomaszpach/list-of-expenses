import React, {Component} from 'react';
import {connect} from 'react-redux';

class Inputs extends Component {
    state = {
        placeholder: 'Please type title (minimum 5 characters)',
        title: '',
        value: '',
        expanse: {}
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
            value: this.state.value,
            id: Date.now()
        };

        this.props.addExpense(expense);
    }


    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label>
                    <span>Title of transaction:</span>
                    <input pattern=".{5,50}" title="Minimum 5 characters" required type="text" name="title"
                           placeholder={this.state.placeholder} onChange={(e) => this.updateInput('title', e)}/>
                </label>
                <label>
                    {/* Block at most two digits after the decimal */}
                    <span>Amount (in PLN):</span>
                    <input step=".01" type="number" name="amount" onChange={(e) => this.updateInput('value', e)}/>
                </label>
                <input type="submit" value="Add"/>
            </form>
        );
    }
}

const mapStateToProps = (reducerState) => {
    return {
        transactions: reducerState.transactions
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addExpense: (expense) => {
            dispatch({type: 'ADD_EXPENSE', expense: expense})
        },
        deleteExpense: (id) => {
            dispatch({type: 'DELETE_EXPENSE', id: id})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Inputs);
