import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Header from '../Header';

const HomePage = () => {

    return (
        <div>
            <Header />
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Link to="/reserve-a-table" >Reserve</Link>
            </div>
        </div>
    )
};

export default HomePage;