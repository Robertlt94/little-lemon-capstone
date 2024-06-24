import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Header from '../Header';
import ConfirmationForm from '../ConfirmationForm';
import FooterLogo from '../FooterLogo';

const ReservationConfirmationPage = () => {

    return (
        <div>
            <Header />
            <PageDescription>
                <Page>Confirm Reservation</Page>
                <p>Review your reservation details and confirm by submitting your contact information.</p>
            </PageDescription>
            <ConfirmationForm />
            <FooterLogo />
        </div>
    )
};

export default ReservationConfirmationPage;

const PageDescription = styled.div`
    background-color: #495E57;
    color: #fff;
    padding: 5vh 5vw;
    font-size: 2rem;
`

const Page = styled.h1`
    color: #F4CE14;
`