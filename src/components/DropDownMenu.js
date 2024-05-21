import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import Nav from './Nav';

const DropDownMenu = () => {

    return (
        <MenuButton>
            <MenuIcon fontSize="large" /><MenuText>Menu</MenuText>
        </MenuButton>
    )
}

export default DropDownMenu;

const MenuButton = styled.button`
    background-color: transparent;
    display: flex;
    padding: 1rem;
    margin: 1rem;
    border: none;
    flex: auto;
`

const MenuText = styled.p`
    font-size: 2rem;
    margin: 0 0 0 .5rem;
    padding: 0;
    // $(MenuButton):hover &,
    // $(MeunuButton):focus & {

    // }
`