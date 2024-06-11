import React from 'react';
import styled from 'styled-components';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Cart = () => {

    return (
        <CartContainer>
            <Alignment>
                <CartText>Cart</CartText><ShoppingCartIcon fontSize="large" />
            </Alignment>
        </CartContainer>
    );
}

export default Cart;

const CartContainer = styled.div`
    width: 45vw;
`

const Alignment = styled.button`
    background-color: transparent;
    display: flex;
    border: none;
    float: right;
`

const CartText = styled.p`
    font-size: 2rem;
    margin: 0 .5rem 0 0;
    padding: 0;
    // $(MenuButton):hover &,
    // $(MeunuButton):focus & {
    // }
`