import React from 'react';

const Inputs = () => {
    return (
        <form>
            <label>
                <span>Title of transaction:</span>
                <input pattern=".{5}" required type="text" name="title" />
            </label>
            <label>
                <span>Amount (in PLN):</span>
                <input type="text" name="amount" />
            </label>
            <input type="submit" value="Add" />
        </form>
    );
};

export default Inputs;
