import React from 'react';
import propTypes from 'prop-types';
import {Item, List,Section, Label} from './Statistic.styled'

function randomColor() {
let color = `#${(Math.random().toString(16) + '000000')
    .substring(2, 8)
    .toUpperCase()}80`;
return color;
}

const Statistics = ({ title, stats }) => {
    return(
    <Section>
            {title && (<h2>{title}</h2>)}
            <List>
                {stats.map(({ id, label, percentage }) => {
                    return (<Item backgroundColor={randomColor()} key = {id}>
                        <Label>{label}</Label>
                        <span>{percentage}%</span>
                    </Item>)
                })}
            </List>
    </Section>
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