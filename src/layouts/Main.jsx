import styled, { css } from 'styled-components';

const MainContainer = styled.main`
    margin: 0 auto;
    max-width: ${props => props.maxWidth || 'none'};
    min-height: ${props => props.fullHeight || 'auto'};

    ${props => props.itemsCentered && css`
        display: flex;
        align-items: center;
        justify-content: center
    `}

`

function Main({itemsCentered, children, fullHeight, maxWidth = false}) {
    return (
        <MainContainer  itemsCentered={itemsCentered} fullHeight={fullHeight} maxWidth={maxWidth}>
            {children}
        </MainContainer>
    )
}

export default Main;