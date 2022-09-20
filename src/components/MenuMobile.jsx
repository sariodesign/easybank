import styled from 'styled-components';
import { Link } from "react-router-dom";
import menuLinks from '../utilities/Menu';


const MenuMobileContainer = styled.div`
    align-items: center;
    background-color: var(--white);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0 auto;
    padding: 32px 0;
    transform: translateY(72px);
    width: calc(100% - 32px);

    @media (min-width: 768px) {
        display: none
    }

    a {
        color: var(--dark-blue);
        text-decoration: none;
    }
`

function MenuMobile() {
    return (
        <MenuMobileContainer>
            { menuLinks.map((item, index) => <Link key={index} to={item.path}>{item.label}</Link> ) }
        </MenuMobileContainer>
    )
}

export default MenuMobile;