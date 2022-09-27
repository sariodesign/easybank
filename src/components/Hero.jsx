import styled from 'styled-components';
import Button from '../subcomponents/Button';

const HeroContainer = styled.section`
    background-color: var(--very-light-gray);
    background-image: url('./bg-intro-mobile.svg');
    background-position: top left;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 50vh;
    padding: 80px 0;

    @media (min-width: 1280px) {
        align-items: center;
        background-image: url('./bg-intro-desktop.svg');
        background-position: top right;
        background-size: 50%;
        display: flex;

        figure {
            position: absolute;
            right: 0;
            top: 0;
        }
    }
`

const HeroContent = styled.div`
    text-align: center;
    
    @media (min-width: 1280px) {
        margin-left: calc((100% - 1280px) / 2);
        max-width: calc(1200px / 2);
        text-align: left;
    }

    h1 {
        color: var(--dark-blue);
        font-size: 32px;
        line-height: 40px;
        font-weight: 400;
        margin: 0 0 16px;

        @media (min-width: 1280px) {
            font-size: 48px;
            line-height: 56px;
            margin-bottom: 32px
        }
    }

    p {
        color: var(--grayish-blue);
        margin: 0 0 16px;

        @media (min-width: 1280px) {
            margin: 0 0 32px
        }
    }
`


function Hero({title, subtitle}) {
    return (
        <HeroContainer>
            <figure>
                <img src="./image-mockups.png" alt="Device image" />
            </figure>
            <HeroContent>
                <h1>{title}</h1>
                <p>{subtitle}</p>
                <Button link="true" path="/register" label="Request invite" color="var(--white)" />
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero