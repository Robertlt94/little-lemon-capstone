import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Header from '../Header';

const ReservationConfirmationPage = ({date}) => {

    console.log(date);

    return (
        <div>
            <Header />
            <h1>Confirmation</h1>
            <p>Please confirm your reservation details below</p>
            <Link to="/thank-you">Confirm & Submit</Link>
        </div>
    )
};

export default ReservationConfirmationPage;