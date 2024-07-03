import React, {useContext, useEffect} from 'react';
import styled from 'styled-components';
import Header from '../Header';
import FooterLogo from '../FooterLogo';
import Button from '../Button';
import ReservationContext from '../../ReservationContext';
import { useNavigate } from 'react-router-dom';

const ThankYouPage = () => {
    const {reservation, setReservation, confirmedReservation, setConfirmedReservation} = useContext(ReservationContext);
    const navigate = useNavigate();

    const returnToMainMenu = () => {
        // {confirmedReservation.length === 0 ? setConfirmedReservation([reservation]) : setConfirmedReservation({...confirmedReservation, reservation})
        // console.log(confirmedReservation);
        navigate("/");
    }

    return (
        <div>
            <Header />
            <PageDescription>
                <Page>Thank You!</Page>
                <p>Your reservation has now been submitted. See you then!</p>
                <ButtonContainer>
                    <Button type="button" label="Main Menu" doThis={returnToMainMenu} />
                </ButtonContainer>
            </PageDescription>
            <ThankYouContainer>
                <ReservationDetailsContainer>
                    <h3>Reservation Details:</h3>
                    <p>Date: {reservation.date}</p>
                    <p>Occasion: {reservation.occasion}</p>
                    <p>Number of People: {reservation.groupSize}</p>
                    <p>Reservation Time: {reservation.time}</p>
                    <h3>Contact Info:</h3>
                    <p>Name: {reservation.firstName} {reservation.lastName}</p>
                    <p>Phone: {reservation.phone}</p>
                    <p>Email: {reservation.email}</p>
                </ReservationDetailsContainer>
            </ThankYouContainer>
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

const ThankYouContainer = styled.div`
    gap: 20px;
    padding: 5vh 0;
    text-align: left;
    margin: 5vh 10vw;

    @media (max-width: 430px) {
        display: flex;
        max-width: 400px;
        text-align: left;
    }
`

const ReservationDetailsContainer = styled.div`
    font-size: 2rem;
    font-weight: bold;
    background-color: #EDEFEE;
    padding: 5vh 10vw;
`

const ButtonContainer = styled.div`
    margin: 2.5vh 0;
`