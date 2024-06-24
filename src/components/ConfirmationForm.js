import React, {useState, useContext} from 'react';
import {useLocation} from 'react-router-dom';
import Button from './Button';
import styled from 'styled-components';
import ReservationContext from '../ReservationContext';

const ConfirmationForm = () => {
    const {reservation, setReservation, firstName, setFirstName, lastName, setLastName, phone, setPhone, email, setEmail, terms, setTerms} = useContext(ReservationContext);
    const location = useLocation();

    console.log(reservation);

    const handleConfirmation = () => {
        console.log('click');
        // window.location = "/thank-you";
    }

    return (
        <ConfirmationDetails>
            <ReservationDetailsContainer>
                <h3>Reservation Detail:</h3>
                <p>Date: {reservation.date}</p>
                <p>Occasion: {reservation.occasion}</p>
                <p>Number of People: {reservation.groupSize}</p>
                <p>Reservation Time: {reservation.time}</p>
                {/* <FormSections>
                    <InputLabels htmlFor="resDateInput">DATE:</InputLabels>
                    <DateInput type="date" id="resDateInput" defaultValue={date} disabled />
                </FormSections>
                <FormSections>
                    <InputLabels htmlFor="occasionInput">OCCASION:</InputLabels>
                    <OccasionInput id="occasionInput" defaultValue={occasion} disabled ></OccasionInput>
                </FormSections> */}
            </ReservationDetailsContainer>
            <UserDetailsContainer>

            </UserDetailsContainer>
            <ButtonContainer>
                <Button type="submit" label="Submit" doThis={handleConfirmation} />
            </ButtonContainer>
        </ConfirmationDetails>
    )
}

export default ConfirmationForm;

const ConfirmationDetails = styled.div`
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

const UserDetailsContainer = styled.div`

`

const FormSections = styled.div`
    margin: 2.5vh 0;
`

const InputLabels = styled.label`
    font-size: 2rem;
`

const DateInput = styled.input`
    padding: 1vh 2.5vw;
    font-size: 1.5rem;
    border-radius: 8pt;
    margin-left: 2rem;

    &:focus {
        background-color: #EDEFEE;
    }
`

const OccasionInput = styled.select`
    font-size: 1.5rem;
    padding: 1vh 2.5vw;
    border-radius: 8pt;
    margin-left: 2rem;
    border: solid 2px #000;

    &:focus {
        background-color: #EDEFEE;
    }
`

const ButtonContainer = styled.div`
    float: right;
    margin: 2.5vh 5vw;
`