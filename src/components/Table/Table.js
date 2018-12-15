import React from 'react';

const Table = () => {
    return (
        <table>
            <tbody>
            <tr>
                <th>Title</th>
                <th>Amount(PLN)</th>
                <th>Amount(EUR)</th>
                <th>Options</th>
            </tr>
            <tr>
                <td>New book about Rust</td>
                <td>100</td>
                <td>22.82</td>
                <td>Delete</td>
            </tr>
            <tr>
                <td>Snacks for a football match</td>
                <td>20</td>
                <td>4.56</td>
                <td>Delete</td>
            </tr>
            <tr>
                <td>Bus ticket</td>
                <td>2.55</td>
                <td>0.58</td>
                <td>Delete</td>
            </tr>
            </tbody>
        </table>
    );
};

export default Table;
