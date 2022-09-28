import { Link } from "react-router-dom"
import styled from 'styled-components'
import menuLinks from '../utilities/Menu'
import socialLinks from '../utilities/Socials'
import Button from '../subcomponents/Button'
import Icon from '../subcomponents/Icon'

const FooterContainer = styled.footer`
    background-color: var(--dark-blue);
    padding: 36px 0;
`

const FooterInner = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;

    @media (min-width: 1280px) {
        align-items: stretch;
        flex-direction: row;
        max-width: 1280px;
        margin: 0 auto;
    }
`

const FooterCompany = styled.div`
    @media (min-width: 1280px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 25%;        
    }
`

const Socials = styled.div`
    display: flex;
    margin-bottom: 32px;

    @media (min-width: 1280px) {
        margin-bottom: 0
    }

    a {
        margin-right: 12px
    }
`

const FooterMenu = styled.nav`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
    row-gap: 20px;

    @media (min-width: 1280px) {
        margin-bottom: 0;
        flex-direction: row;
        flex-wrap: wrap;
    } 

    a {
        color: var(--grayish-blue);
        text-decoration: none;
        transition: all .25s ease-in-out;
        &:hover {
            @media (hover:hover) {
                color: var(--lime-green)
            }
        }

        @media (min-width: 1280px) {
            width: 50%;
        }
    }  
`

const FooterCopy = styled.div`
    align-items: center;
    display: flex;
    gap: 20px;
    flex-direction: column;

    @media (min-width: 1280px) {
        align-items: flex-end;
        margin-left: auto;
    }
`

const FooterLogo = styled.img`
    margin-bottom: 24px;
`

function Footer() {
    return (
        <FooterContainer>
            <FooterInner>
                <FooterCompany>
                    <Link to="/">
                        <FooterLogo src="./logo-inverse.svg" alt="Easybank logo" />
                    </Link>
                    <Socials>
                        { socialLinks.map((item,index) => <Link key={index} to={item.path}><Icon name={item.icon} /></Link>) }
                    </Socials>
                </FooterCompany>
                <FooterMenu>
                    { menuLinks.map((item, index) => <Link key={index} to={item.path}>{item.label}</Link>) }
                </FooterMenu>
                <FooterCopy>
                    <Button link="true" path="/request" label="Request invite" />
                    <span>&copy; Easybank. All Right Reserved</span>
                </FooterCopy>
            </FooterInner>
        </FooterContainer>
    )    
}

export default Footer