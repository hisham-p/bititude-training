import React from 'react';
import styled from 'styled-components'
import './Cockpit.css'

const Cockpit = (props) => {
    const StyledButton = styled.button ` background-color: ${props => props.alt
        ? 'red'
        : 'green'}             
    font: inherit;             
    color: white;
    border: 1px solid blue;             
    padding: 8px;             
    cursor:pointer;
    &:hover {   
             background-color: white;
            color:${propis => propis.alt
            ? 'red'
            : 'green'}             
    }`;
    return (
        <div>
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>
            <StyledButton alt={props.persons} onClick={props.toggle}>
                Toggle Persons
            </StyledButton>
        </div>
    );
};

export default Cockpit;