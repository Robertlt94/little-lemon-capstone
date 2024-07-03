import React, {useState} from 'react';
import ReservationContext from './ReservationContext';

const ReservationProvider = ({children}) => {
    const [confirmedResrvations, setConfirmedReservation] = useState([]);
    const [date, setDate] = useState("");
    const [groupSize, setGroupSize] = useState(1);
    const [occasion, setOccasion] = useState("");
    const [time, setTime] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [terms, setTerms] = useState(false);
    const [reservation, setReservation] = useState(
        {
            date: date,
            groupSize: groupSize,
            occasion: occasion,
            time: time,
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email,
            terms: false,
        }
    )

    return (
        <ReservationContext.Provider value={{date, setDate, groupSize, setGroupSize, occasion, setOccasion, time, setTime, firstName, setFirstName, lastName, setLastName, phone, setPhone, email, setEmail, terms, setTerms, reservation, setReservation, confirmedResrvations, setConfirmedReservation}}>
            {children}
        </ReservationContext.Provider>
    )
}

export default ReservationProvider;