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
                <BackButton />
            }
            {location.pathname !== ("/reserve-a-table" || "/reserve-a-table/confirmation" || "/thank-you") && <CartIcon />}
        </Wrapper>
    )
};

export default Header;

const Wrapper = styled.div`
    display: flex;
    width: 100vw;
`