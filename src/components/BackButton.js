import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <Button onClick={()=>navigate(-1)}>
            <ArrowBackIcon fontSize='large' /><BackText>Back</BackText>
        </Button>
    )
};

export default BackButton;

const Button = styled.button`
    background-color: transparent;
    display: flex;
    border: none;
`

const BackText = styled.p`
    font-size: 2rem;
    padding: 0;
    margin: 0;
`