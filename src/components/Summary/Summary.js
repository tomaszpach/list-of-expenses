import React from 'react';

const Summary = ({transactions, eurPln}) => {
    let sum = 0;
    transactions.forEach(item => {
        return sum = sum + item.value;
    });

    const eur = (sum / eurPln).toFixed(2);
    return (
        <div>Sum: {sum} PLN ({eur} EUR)</div>
    );
};

export default Summary;