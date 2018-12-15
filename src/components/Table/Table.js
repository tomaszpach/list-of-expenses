import React from 'react';

const Table = ({transactions, eurPln}) => {
    const items = transactions.map((item, index) => {
        const eur = (item.value / eurPln).toFixed(2);
        return (
            <tr key={index}>
                <td>{item.title}</td>
                <td>{item.value}</td>
                <td>{eur}</td>
                <td>Delete</td>
            </tr>
        );
    });
    return (
        <table>
            <tbody>
            <tr>
                <th>Title</th>
                <th>Amount(PLN)</th>
                <th>Amount(EUR)</th>
                <th>Options</th>
            </tr>
            {items}
            </tbody>
        </table>
    );
};

export default Table;
