import React from 'react';
import propTypes from 'prop-types';

// function randomColor() {
// let color = `#${(Math.random().toString(16) + '000000')
//     .substring(2, 8)
//     .toUpperCase()}80`;
// return color;
// }

const Statistics = ({ title, stats }) => {
    return(
    <section>
            {title && (<h2>{title}</h2>)}
            <ul>
                {stats.map(({ id, label, percentage }) => {
                    return (<li key = {id}>
                        <span>{label}</span>
                        <span>{percentage}%</span>
                    </li>)
                })}
            </ul>
    </section>
    )
}
Statistics.propTypes = {
    title: propTypes.string,
    stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    }).isRequired
  ).isRequired,
}


export default Statistics;