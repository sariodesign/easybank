import React from 'react';
import styled from 'styled-components';

const IntroTitle = styled.h2`
    color: var(--dark-blue);
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    margin: 0 0 16px;
    width: 100%;

    @media (max-width: 1279px) {
        text-align: center
    }

    @media (min-width: 1280px) {
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 32px
    }
`

const IntroText = styled.p`
    color: var(--grayish-blue);
    margin: 0;

    @media (max-width: 1279px) {
        text-align: center
    }
`

function IntroSection({ title, subtitle }) {

    return (
        <React.Fragment>
            <IntroTitle>{title}</IntroTitle>
            <IntroText>{subtitle}</IntroText>
        </React.Fragment>
    )
}

export default IntroSection;