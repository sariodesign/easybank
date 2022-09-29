import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Button from '../subcomponents/Button';
import menuLinks from '../utilities/Menu';

const HeaderContainer = styled.header`
    background-color: var(--white);
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;
`

const HeaderInner = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1280px;
    margin: 0 auto;
    padding: 16px;

    @media (min-width: 1024px) {
        padding: 8px 0;
    }
`

const HeaderNav = styled.nav`
    display: flex;
    
    a {
        color: var(--grayish-blue);
        margin-right: 10px;
        text-decoration: none;

        &:last-child {
            margin: 0;
        }
    }
`

const HeaderIcon = styled.div`
    align-items: center; 
    display: flex;
`

function Header({ isMobileDevice, openMenu }) {
    const [active, setActive] = useState(false)

    const handlerMenu = () => {
        openMenu(prev => !prev);
        setActive(active => !active)
    }
    
    return (
        <HeaderContainer isMobileDevice={isMobileDevice}>
            <HeaderInner>
                <Link to="/">
                    <img src="./logo.svg" alt="Easybank logo" />
                </Link>
                { 
                    isMobileDevice ? (
                        <HeaderIcon onClick={handlerMenu}>
                            {
                                active ? <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19"><g fill="#2D314D" fillRule="evenodd"><path d="M.868.661l16.97 16.97-.706.708L.162 1.369z"/><path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z"/></g></svg> : 
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="11"><g fill="#2D314D" fillRule="evenodd"><path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z"/></g></svg>
                            }
                        </HeaderIcon>
                    ) : ( 
                        <React.Fragment>
                            <HeaderNav aria-label="menu">
                                { menuLinks.map((item, index) => !item.footer && <Link key={index} to={item.path} aria-label={item.label}>{item.label}</Link>) }
                            </HeaderNav>
                            <Button link="true" path="/request" label="Request invite" />
                        </React.Fragment>
                    )
                }
            </HeaderInner>
        </HeaderContainer>
    )
}

export default Header;