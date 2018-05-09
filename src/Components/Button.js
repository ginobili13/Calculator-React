import React from 'react';

const Button = (props) => {
    return (
        <button className={props.styled} onClick={() => { props.operation(props.value)}}> {props.value} </button>
    );
};

export default Button;
