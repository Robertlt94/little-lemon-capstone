import React from 'react';
import styled from 'styled-components';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Cart = () => {

    return (
        <CartContainer>
            <CartText>Cart</CartText><ShoppingCartIcon fontSize="large" />
        </CartContainer>
    );
}

export default Cart;

const CartContainer = styled.button`
background-color: transparent;
display: flex;
padding: 1rem;
margin: 1rem;
border: none;
flex: inherit;
`

const CartText = styled.p`
    font-size: 2rem;
    margin: 0 .5rem 0 0;
    padding: 0;
    $(MenuButton):hover &,
    $(MeunuButton):focus & {

    }
`