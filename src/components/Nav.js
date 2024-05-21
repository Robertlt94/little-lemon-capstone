import React from 'react';
import styled from 'styled-components';
import {Link as Link, useLocation} from 'react-router-dom';

const Nav = () => {
    const location = useLocation();

    return (
        <DropDownNav>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/reserve-a-table">Reserve a table</NavLink>
        </DropDownNav>
    )
};

export default Nav;

const DropDownNav = styled.nav`
    display: flex;
    flex-direction: column;
`

const NavLink = styled(Link)`
    background-color: #fff;
    color: #000;
    font-size: 2rem;
    text-decoration: none;
    &:hover {
        background-color: #F4CE14;
        color: #0064FF;
        text-decoration: solid 1px #0064FF;
    };
`