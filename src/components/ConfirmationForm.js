import React, {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from './Button';
import styled from 'styled-components';
import ErrorMessage from './ErrorMessage';
import ReservationContext from '../ReservationContext';

const ConfirmationForm = () => {
    const {reservation, setReservation, firstName, setFirstName, lastName, setLastName, phone, setPhone, email, setEmail, terms, setTerms} = useContext(ReservationContext);
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [termsError, setTermsError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(terms);
        firstName === "" ? setFirstNameError(true) : setFirstNameError(false);
        lastName === "" ? setLastNameError(true) : setLastNameError(false);
        phone === "" ? setPhoneError(true) : setPhoneError(false);
        email === "" ? setEmailError(true) : setEmailError(false);
        terms === false ? setTermsError(true) : setTermsError(false);
        setReservation({...reservation, firstName: firstName, lastName: lastName, phone: phone, email: email, terms: terms});
        if(firstName && lastName && phone && email && terms){
            navigate("/thank-you");
        }else {
            console.log("Error: Missing form inputs.");
        }
    }

    return (
        <ConfirmationDetails onSubmit={handleSubmit}>
            <ReservationDetailsContainer>
                <h3>Reservation Details:</h3>
                <p>Date: {reservation.date}</p>
                <p>Occasion: {reservation.occasion}</p>
                <p>Number of People: {reservation.groupSize}</p>
                <p>Reservation Time: {reservation.time}</p>
            </ReservationDetailsContainer>
            <UserDetailsContainer>
                <Instructions>If your reservation details are correct, fill out your contact info below and submit it to confirm your reservation.</Instructions>
                <FormSections>
                    <InputLabels htmlFor="firstNameInput" >First Name:</InputLabels>
                    <FirstNameInput id="firstNameInput" type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
                    {firstNameError && <ErrorMessage message="Error: A first name is required for reservation purposes. Example: John" />}
                </FormSections>
                <FormSections>
                    <InputLabels htmlFor="lastNameInput" >Last Name:</InputLabels>
                    <LastNameInput id="lastNameInput" type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} />
                    {lastNameError && <ErrorMessage message="Error: A last name is required for reservation purposes. Example: Toe" />}
                </FormSections>
                <FormSections>
                    <InputLabels htmlFor="phoneInput">Phone Number:</InputLabels>
                    <PhoneInput id="phoneInput" type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)} minLength={12} maxLength={12} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                    <Example>Example: 111-222-3333</Example>
                    {phoneError && <ErrorMessage message="Error: A phone number is required for reservation purposes. Example: 280-114-3822" />}
                </FormSections>
                <FormSections>
                    <InputLabels htmlFor="emailInput">Email:</InputLabels>
                    <EmailInput id="emailInput" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    {emailError && <ErrorMessage message="Error: A email address is required for reservation purposes. Example: john.toe@gmail.com" />}
                </FormSections>
                <FormSections>
                    <TermsInput id="termsInput" type="checkbox" value={terms} onChange={()=>setTerms(!reservation.terms)} />
                    <InputLabels htmlFor="termsInput">Terms & Conditions</InputLabels>
                    {termsError && <ErrorMessage message="Error: Agreeing to the Terms and conditions are required to place a reservation." />}
                </FormSections>
            </UserDetailsContainer>
            <ButtonContainer>
                <Button type="submit" label="Submit" />
            </ButtonContainer>
        </ConfirmationDetails>
    )
}

export default ConfirmationForm;

const ConfirmationDetails = styled.form`
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

const ButtonContainer = styled.div`
    float: right;
    margin: 2.5vh 5vw;
`

const Instructions = styled.p`
    font-size: 2rem;
`

const FirstNameLabel = styled.label`
    font-size: 2rem;
`
const LastNameLabel = styled.label`
    font-size: 2rem;
`
const PhoneLabel = styled.label`
    font-size: 2rem;
`
const EmailLabel = styled.label`
    font-size: 2rem;
`
const TermsLabel = styled.label`
    font-size: 2reml
`

const FirstNameInput = styled.input`
    padding: 1vh 2.5vw;
    font-size: 1.5rem;
    border-radius: 8pt;
    margin-left: 2rem;

    &:focus {
        background-color: #EDEFEE;
    }
`
const LastNameInput = styled.input`
    padding: 1vh 2.5vw;
    font-size: 1.5rem;
    border-radius: 8pt;
    margin-left: 2rem;

    &:focus {
        background-color: #EDEFEE;
    }
`
const PhoneInput = styled.input`
    padding: 1vh 2.5vw;
    font-size: 1.5rem;
    border-radius: 8pt;
    margin-left: 2rem;

    &:focus {
        background-color: #EDEFEE;
    }
`

const Example = styled.p`
    font-size: 1.5rem;
    margin-left: 12vw;
`

const EmailInput = styled.input`
    padding: 1vh 2.5vw;
    font-size: 1.5rem;
    border-radius: 8pt;
    margin-left: 2rem;

    &:focus {
        background-color: #EDEFEE;
    }
`
const TermsInput = styled.input`
    margin: 0 2vw;
    transform: scale(2);
`