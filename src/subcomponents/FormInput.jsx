import styled from 'styled-components';

const Field = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;

    label {
        color: black;
        margin-bottom: 4px;
    }

    input {
        height: 40px;
        padding: 0 8px;

        &[type="submit"] {
            cursor: pointer;
        }
    }
`

function FormInput({ label,type,name,placeholder,value }) {
    return (
        <Field>
            {label && <label name={name}>{label}</label> }
            <input type={type} name={name} id={name} placeholder={placeholder} value={value} />
        </Field>
    )
}

export default FormInput;