import React from 'react';

const Summary = ({transactions, eurPln}) => {
    let sum = 0;
    transactions.forEach(item => {
        return sum = sum + item.value;
    });

    const eur = (sum / eurPln).toFixed(2);
    return (
        <h2 className="summary">Sum: {sum.toFixed(2)} PLN ({eur} EUR)</h2>
    );
};

export default Summary;
