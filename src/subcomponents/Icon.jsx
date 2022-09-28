import styled from 'styled-components';

const SvgIcon = styled.svg`
    fill: #fff;
    height: 20px;
    transition: fill .25s ease-in-out;
    width: 20px;

    &:hover {
        @media (hover:hover) {
            fill: var(--lime-green) 
        } 
    }
`

function Icon({name}) {
    return (
        <SvgIcon>
            <use xlinkHref={name} />
        </SvgIcon>
    )
}

export default Icon