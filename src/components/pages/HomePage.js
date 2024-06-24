import React from 'react';
import {useLocation} from 'react-router-dom';
import styled from 'styled-components';
import Header from '../Header';
import Button from '../Button';
import OrderForDelivery from './OrderForDelivery';
import MenuItems from './MenuItems';

const HomePage = () => {
    const location = useLocation();

    const toReservationDetails = () => {
        window.location = "/reserve-a-table";
    }

    return (
        <div>
            <Header />
            <Greeting>
                <RestaurantName>Little Lemon</RestaurantName>
                <h4>Chicago, United States</h4>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Button type="button" path="/reserve-a-table" label="Reserve" doThis={toReservationDetails} />
            </Greeting>
            <OrderForDelivery />
            <MenuItems />
        </div>
    )
};

export default HomePage;

const Greeting = styled.div`
    background-color: #495E57;
    color: #fff;
    padding: 5vh 5vw;
    font-size: 2rem;
`

const RestaurantName = styled.h1`
    color: #F4CE14;
`