import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Header from '../Header';

const ThankYouPage = () => {

    return (
        <div>
            <Header />
            <h1>Thank You</h1>
            <p>We've received your reservation for: insert submission below</p>
            <Link to="/">Return to Main Menu</Link>
        </div>
    )
};

export default ThankYouPage;