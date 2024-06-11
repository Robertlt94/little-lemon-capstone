import React, {useState} from 'react';
import styled from 'styled-components';

const OrderForDelivery = () => {
    const [foodType] = useState(["Lunch", "Mains", "Desserts", "A La Carte", "Specials"])

    return (
        <>
            <Title>Order For Delivery:</Title>
            <Container>
                {foodType.map(type => <Type key={type}>{type}</Type>)}
            </Container>
        </>
    )
};

export default OrderForDelivery;

const Title = styled.p`
    font-size: 2rem;
    font-weight: 700;
    margin-left: 5vw;
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    overflow: hidden;
    overflow-x: scroll;
    gap: 5vw;
    margin-left: 5vw;
`

const Type = styled.div`
    font-size: 2rem;
    font-weight: 500;
    background-color: #EDEFEE;
    color: #495E57;
    padding: 1vh 2vw;
    border-radius: 50pt;
`