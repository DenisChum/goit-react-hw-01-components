import React from 'react';
import propTypes from 'prop-types';
import { Table, Type, Info} from './TransactionHistory.styled'

const TransactionHistory = ({ items }) => {
    return (<Table>
        <thead>
                    <tr>
                    <Type>Type</Type>
                    <Type>Amount</Type>
                    <Type>Currency</Type>
                </tr>        
        </thead>
        <tbody>
            {items.map(({ id, type, amount, currency }) => {
                return (
                <tr key={id}>
                < Info>{type}</Info>
                < Info>{amount}</Info>
                < Info>{currency}</Info>
                </tr>
                )
            })}
        </tbody>        
    </Table>)
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