import React from 'react';

const Table = ({transactions, eurPln, onDelete}) => {
    const items = transactions.map((item, index) => {
        const title = item.title,
            value = (item.value).toFixed(2),
            eur = (item.value / eurPln).toFixed(2),
            id = item.id;

        return (
            <tr key={index}>
                <td>{title}</td>
                <td>{value}</td>
                <td>{eur}</td>
                <td className="delete" onClick={() => onDelete(id)}>Delete</td>
            </tr>
        );
    });
    return (
        <div className="expenses">
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
        </div>
    );
};

export default Table;
