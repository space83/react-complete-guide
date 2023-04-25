import React from 'react';
import classes from './Person.css';
import Radium from 'radium';
import PropTypes from 'prop-types';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
            <p key="i2">{props.children}</p>
            <input 
            key="i3"
            type="text" 
            onChange={props.changed} 
            value={props.name }></input>
        </div>
    
    )
}

person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default Radium(person);