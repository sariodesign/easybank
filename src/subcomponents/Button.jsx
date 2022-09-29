import { Link } from "react-router-dom";
import styled, { css } from 'styled-components';

const ButtonWrap = styled.button`
    border: 0;
    border-radius: 24px;
    background: ${props => props.bg || "linear-gradient(-45deg,var(--lime-green),var(--bright-cyan))"};
    color: ${props => props.color || "#fefefe"};
    cursor: pointer;
    height: 40px;
    padding: 8px 12px;
    width: 160px;
`

const ActionWrap = styled.div`
    border: 0;
    border-radius: 24px;
    background: ${props => props.bg || "linear-gradient(-45deg,var(--lime-green),var(--bright-cyan))"};
    cursor: pointer;
    padding: 8px 12px;
    text-align: center;
    width: 160px;

    a {
        color: var(--white);
        text-decoration: none;
    }
`

function Button({bg, color, link, path, label, children}) {
    return (
        <ActionWrap>
            { link ? <Link to={path} aria-label="Request">{label ? label : children }</Link> : <ButtonWrap bg={bg} color={color}>{children}</ButtonWrap> }
        </ActionWrap>
    )
}

export default Button