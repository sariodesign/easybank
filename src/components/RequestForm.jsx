import styled from 'styled-components';
import FormInput from "../subcomponents/FormInput";

const FormContainer = styled.form`
    max-width: 1280px;
    margin: 0 auto;
    padding-top: 54px;
    width: 100%;

    @media (min-width: 1280px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-top: 72px;
    } 
`

function RegisterForm() {
    return (
        <FormContainer>
            <FormInput label="Username" type="text" name="name" placeholder="Add a username"/>
            <FormInput label="Email" type="email" name="email" placeholder="Add your email address"/>
            <FormInput label="Password" type="password" name="password" placeholder="Insert a password" />
            <FormInput type="submit" name="submit" value="Register" submit="true" />    
        </FormContainer>
    )
}

export default RegisterForm;