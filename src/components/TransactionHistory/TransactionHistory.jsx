import React from 'react';
import propTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
    return (<table>
        <thead>
                    <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>        
        </thead>
        <tbody>
            {items.map(({ id, type, amount, currency }) => {
                return (
                <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
                </tr>
                )
            })}
        </tbody>        
    </table>)
};

TransactionHistory.propTypes = { 
transactions: propTypes.arrayOf(
    propTypes.exact({
    id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    amount: propTypes.string.isRequired,
    currency: propTypes.string.isRequired,
    }).isRequired,
)};


export default TransactionHistory;