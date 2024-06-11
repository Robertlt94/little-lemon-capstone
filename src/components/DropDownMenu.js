import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import Nav from './Nav';

const DropDownMenu = () => {

    return (
        <MenuButton>
            <Alignment>
                <MenuIcon fontSize="large" /><MenuText>Menu</MenuText>
            </Alignment>
        </MenuButton>
    )
}

export default DropDownMenu;

const MenuButton = styled.div`
    width: 45vw;
`

const Alignment = styled.button`
    background-color: transparent;
    display: flex;
    border: none;
`

const MenuText = styled.p`
    font-size: 2rem;
    margin: 0 0 0 .5rem;
    padding: 0;
    // $(MenuButton):hover &,
    // $(MeunuButton):focus & {

    // }
`