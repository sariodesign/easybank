import styled from "styled-components"

const ContentContainer = styled.section`
    background-color: ${props => props.bg || 'var(--white)'};
    padding: 64px 32px;

    @media (min-width: 1280px) {
        align-items: center;
        display: flex;
        padding: 128px 0;
    }
`

const ContentInner = styled.div`
    @media (min-width: 1280px) {
        max-width: 1280px;
        margin: 0 auto;
        width: 100%;
    }
`

function Content({bg, children}){
    return (
        <ContentContainer bg={bg}>
            <ContentInner>  
                {children}
            </ContentInner> 
        </ContentContainer>
    )
}

export default Content