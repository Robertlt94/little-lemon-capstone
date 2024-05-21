import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ReservationDetailsPage from './components/pages/ReservationDetailsPage';
import ReservationConfirmationPage from './components/pages/ReservationConfirmationPage';
import ThankYouPage from './components/pages/ThankYouPage';

const todaysDate = () => {
  let dayOf = new Date();
  let year = dayOf.getFullYear();
  let month = dayOf.getMonth();
  month.length < 1 && (month = `0${month}`);
  let day = dayOf.getDate();
  day.length < 1 && (day = `0${day}`);
  return `${year}-${month}-${day}`
}

function App() {
  const [hoursOfOperation, setHoursOfOperation] = useState({open: "09:00", close: "20:00"});
  const [today] = useState(todaysDate());
  const [date, setDate] = useState("yyyy-MM-dd");
  const [seniors, setSeniors] = useState(0);
  const [adults, setAdults] = useState(0);
  const [kids, setKids] = useState(0);
  const [firstName, setFirstName] = useState(0);
  const [lastName, setLastName] = useState(0);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [terms, setTerms] = useState(false);
  const [availability, setAvailability] = useState(
     [
        {
          date: "2024/05/21",
          times: [
          [{time: "09:00", reserved: true}, {time: "09:30", reserved: true}, {time: "10:00", reserved: true}, {time: "10:30", reserved: true}, {time: "11:00", reserved: true}, {time: "11:30", reserved: true}, {time: "12:00", reserved: true}, {time: "12:30", reserved: true}, {time: "13:00", reserved: true}, {time: "13:30", reserved: true}, {time: "14:00", reserved: true}, {time: "14:30", reserved: true}, {time: "15:00", reserved: true}, {time: "15:30", reserved: true}, {time: "16:00", reserved: true}, {time: "16:30", reserved: false}, {time: "17:00", reserved: true}, {time: "17:30", reserved: false}, {time: "18:00", reserved: false}, {time: "18:30", reserved: false}, {time: "19:00", reserved: true}, {time: "19:30", reserved: false}]
          ]
        },
        {
          date: "2024/05/22",
          times: [
            {time: "09:00", reserved: false}, {time: "09:30", reserved: false}, {time: "10:00", reserved: false}, {time: "10:30", reserved: false}, {time: "11:00", reserved: false}, {time: "11:30", reserved: false}, {time: "12:00", reserved: false}, {time: "12:30", reserved: false}, {time: "13:00", reserved: false}, {time: "13:30", reserved: false}, {time: "14:00", reserved: false}, {time: "14:30", reserved: false}, {time: "15:00", reserved: false}, {time: "15:30", reserved: false}, {time: "16:00", reserved: false}, {time: "16:30", reserved: false}, {time: "17:00", reserved: false}, {time: "17:30", reserved: false}, {time: "18:00", reserved: false}, {time: "18:30", reserved: false}, {time: "19:00", reserved: false}, {time: "19:30", reserved: false}
          ]
        },
        {
          date: "2024/05/23",
          times: [
            {time: "09:00", reserved: false}, {time: "09:30", reserved: false}, {time: "10:00", reserved: false}, {time: "10:30", reserved: false}, {time: "11:00", reserved: false}, {time: "11:30", reserved: false}, {time: "12:00", reserved: false}, {time: "12:30", reserved: false}, {time: "13:00", reserved: false}, {time: "13:30", reserved: false}, {time: "14:00", reserved: false}, {time: "14:30", reserved: false}, {time: "15:00", reserved: false}, {time: "15:30", reserved: false}, {time: "16:00", reserved: false}, {time: "16:30", reserved: false}, {time: "17:00", reserved: false}, {time: "17:30", reserved: false}, {time: "18:00", reserved: false}, {time: "18:30", reserved: false}, {time: "19:00", reserved: false}, {time: "19:30", reserved: false}
          ]
        },
        {
          date: "2024/05/24",
          times: [
            {time: "09:00", reserved: false}, {time: "09:30", reserved: false}, {time: "10:00", reserved: false}, {time: "10:30", reserved: false}, {time: "11:00", reserved: false}, {time: "11:30", reserved: false}, {time: "12:00", reserved: false}, {time: "12:30", reserved: false}, {time: "13:00", reserved: false}, {time: "13:30", reserved: false}, {time: "14:00", reserved: false}, {time: "14:30", reserved: false}, {time: "15:00", reserved: false}, {time: "15:30", reserved: false}, {time: "16:00", reserved: false}, {time: "16:30", reserved: false}, {time: "17:00", reserved: false}, {time: "17:30", reserved: false}, {time: "18:00", reserved: false}, {time: "18:30", reserved: false}, {time: "19:00", reserved: false}, {time: "19:30", reserved: false}
          ]
        },
        {
          date: "2024/05/25",
          times: [
            {time: "09:00", reserved: false}, {time: "09:30", reserved: false}, {time: "10:00", reserved: false}, {time: "10:30", reserved: false}, {time: "11:00", reserved: false}, {time: "11:30", reserved: false}, {time: "12:00", reserved: false}, {time: "12:30", reserved: false}, {time: "13:00", reserved: false}, {time: "13:30", reserved: false}, {time: "14:00", reserved: false}, {time: "14:30", reserved: false}, {time: "15:00", reserved: false}, {time: "15:30", reserved: false}, {time: "16:00", reserved: false}, {time: "16:30", reserved: false}, {time: "17:00", reserved: false}, {time: "17:30", reserved: false}, {time: "18:00", reserved: false}, {time: "18:30", reserved: false}, {time: "19:00", reserved: false}, {time: "19:30", reserved: false}
          ]
        }
      ]
  );

  const formReset = () => {
    setDate("YYYY/MM/DD");
    setSeniors(0);
    setAdults(0);
    setKids(0);
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setTerms(false);
  }

  const handleDateChange = (e) => {
    setDate(e.target.value);
  }

  const handleSeniorChange  = (e) => {
    setSeniors(e.target.value);
  }

  return (
    <Router>
      {console.log(today)}
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reserve-a-table" element={<ReservationDetailsPage date={date} availability={availability} handleDateChange={handleDateChange} handleSeniorChange={handleSeniorChange} />} />
          <Route path="/reserve-a-table/confirmation" element={<ReservationConfirmationPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </div>
    </Router>  
  );
}

export default App;
