import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Button = ({type, path, label, ready}) => {

    return (
        <MainButton type={type} disabled={ready}>
            <Routing to={path}>{label}</Routing>
        </MainButton>
    )
}

export default Button;

const MainButton = styled.button`
    padding: 1vh 3vw;
    background-color: #F4CE14;
    border-radius: 50pt;
    &:active,
    &:focus {
        background-color: #967C00;
    }
`

const Routing = styled(Link)`
    text-decoration: none;
    font-size: 2rem;
    font-weight: 1000;
    color: #000;
`