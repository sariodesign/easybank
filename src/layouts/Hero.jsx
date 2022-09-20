import styled from 'styled-components';

const SectionContainer = styled.section`
    background-image: url(${props => props.bgImage || '' });

    @media (min-width: 1280px) {
        align-items: center;
        display: flex;
        justify-content: center
    }
`

function SectionContainer({children}) {
    return (
        <SectionContainer>
            {children}
        </SectionContainer>
    )
}

export default SectionContainer;