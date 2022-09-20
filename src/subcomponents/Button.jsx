import { Link } from "react-router-dom";
import styled, { css } from 'styled-components';

const ButtonWrap = styled.button`
    border: 0;
    border-radius: 16px;
    background: ${props => props.bg || "linear-gradient(-45deg,var(--lime-green),var(--bright-cyan))"};
    color: ${props => props.color || "#fefefe"};
    padding: 8px 12px;

    a {
        color: var(--white);
        text-decoration: none;
    }
`

function Button({bg, color, link, path, label, children}) {
    return (
        <ButtonWrap bg={bg} color={color}>
            {link ? <Link to={path}>{label ? label : children }</Link> : children}
        </ButtonWrap>
    )
}

export default Button