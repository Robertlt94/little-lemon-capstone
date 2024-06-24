import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Header from '../Header';
import FooterLogo from '../FooterLogo';
import Button from '../Button';

const ThankYouPage = () => {

    return (
        <div>
            <Header />
            <PageDescription>
                <Page>Thank You!</Page>
                <p>Your reservation has now been submitted. See you then!</p>
            </PageDescription>
            <h1>Thank You</h1>
            <p>We've received your reservation for: insert submission below</p>
            <Link to="/"><Button type="button" label="Return to Main Menu" /></Link>
            <FooterLogo />
        </div>
    )
};

export default ThankYouPage;

const PageDescription = styled.div`
    background-color: #495E57;
    color: #fff;
    padding: 5vh 5vw;
    font-size: 2rem;
`

const Page = styled.h1`
    color: #F4CE14;
`