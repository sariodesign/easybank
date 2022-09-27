import styled, {css} from 'styled-components';

const Field = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;

    @media (min-width: 1280px) {
        width:  calc(33% - 8px);

        ${props => props.submit && css`
            margin-left: auto;
            width: auto;
        `}
    }

    label {
        color: black;
        margin-bottom: 4px;
    }

    input {
        box-sizing: border-box;
        background-color: var(--white);
        color: var(--dark-blue);
        border: 1px solid var(--dark-blue);
        height: 40px;
        padding: 0 8px;

        &[type="submit"] {
            cursor: pointer;
        }
    }
`

function FormInput({ label,type,name,placeholder,value, submit = false }) {
    return (
        <Field submit={submit}>
            {label && <label name={name}>{label}</label> }
            <input type={type} name={name} id={name} placeholder={placeholder} value={value} />
        </Field>
    )
}

export default FormInput;