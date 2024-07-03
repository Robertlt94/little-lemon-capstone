import React, {useContext} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Header from '../Header';
import HelpIcon from '@mui/icons-material/Help';
import Button from '../Button';
import BookingForm from '../BookingForm';
import FooterLogo from '../FooterLogo';

const ReservationDetailsPage = () => {

    return (
        <div>
            <Header />
            <PageDescription>
                <Page>Reservation Details</Page>
                <p>Please provide us with the information below to help us prepare for your reservation.</p>
            </PageDescription>
            <BookingForm />
            <FooterLogo />
        </div>
    )
};
export default ReservationDetailsPage;

const PageDescription = styled.div`
    background-color: #495E57;
    color: #fff;
    padding: 5vh 5vw;
    font-size: 2rem;
`

const Page = styled.h1`
    color: #F4CE14;
`

const FormContainer = styled.form`
    margin: 5vh 5vw;
    font-size: 1.5rem;
`

const Frame = styled.fieldset`
    margin: 5vh 5vw;
`

const TimeSlots = styled.ul`
    list-style: none;
    text-align: center;
    width: 70vw;
    display: grid;
    grid-template: repeat(2, 1fr) / repeat(4, 1fr);
    row-gap: 5vh;
`

const AvailableTimes = styled.li`
    background-color: #EDEFEE;
    box-shadow: 0 0 3px 2px #9fa1a0;
    border-radius: 8pt;
    padding: 10px;
    font-size: 1.5rem;
    width: max-content;
    margin-left: auto;
    margin-right: auto;
        &:checked {
        background-color: #967C00;
        color: #fff;
    }
`