import styled, {css} from 'styled-components';

const DialogContainer = styled.div`
    background-color: rgba(0,0,0,.5);
    height: 100vh;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    visibility: hidden;
    width: 100vw;

    ${props => props.visible && css`
        opacity: 1;
        visibility: visible;
    `}
`

function Dialog({visible, children}) {
    
    return (
        <DialogContainer visible={visible}>
            {children}
        </DialogContainer>
    )
}

export default Dialog;