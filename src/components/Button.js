import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Button = ({type, label, doThis}) => {

    return (
        <MainButton type={type} onClick={doThis}>
            {label}
        </MainButton>
    )
}

export default Button;

const MainButton = styled.button`
    padding: 1vh 3vw;
    background-color: #F4CE14;
    border-radius: 50pt;
    text-decoration: none;
    font-size: 2rem;
    font-weight: 1000;
    color: #000;
    &:active,
    &:focus {
        background-color: #967C00;
    }
`

const Routing = styled(Link)`

`