import React from 'react';
import styled from 'styled-components';

const ErrorMessage = ({message}) => {

    return <Error>{message}</Error>
}

export default ErrorMessage;

const Error = styled.p`
    font-size: 2rem;
`