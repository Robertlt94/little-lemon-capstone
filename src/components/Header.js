import React from 'react';
import styled from 'styled-components';
import {useLocation} from 'react-router-dom';
import Nav from './Nav';
import BackButton from './BackButton';
import DropDownMenu from './DropDownMenu';
import CartIcon from './CartIcon';

const Header = () => {
    const location = useLocation();

    return (
        <Wrapper>
            {location.pathname === "/" ?
                <DropDownMenu />
                :
                location.pathname === "/thank-you" ?
                    <></>
                    :
                    <BackButton />
            }
            {location.pathname === "/" && <CartIcon />}
        </Wrapper>
    )
};

export default Header;

const Wrapper = styled.div`
    display: flex;
    width: max-content;
    margin: 2vh 5vw;
`