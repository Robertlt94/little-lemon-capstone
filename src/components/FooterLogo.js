import React from 'react';
import styled from 'styled-components'

const FooterLogo = () => {

    return (
        <Wrapper>
            <Logo src='https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/Logo.370f832fad423c516d56.png' />
        </Wrapper>
    )
}

export default FooterLogo;

const Wrapper = styled.div`
    width: max-content;
    margin-left: auto;
    margin-right: auto;
`

const Logo = styled.img`
    height: 8vh;
`