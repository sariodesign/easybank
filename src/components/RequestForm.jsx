import styled from 'styled-components';
import FormInput from "../subcomponents/FormInput";

const FormContainer = styled.div`
    padding: 0 16px;

    @media (min-width: 768px) {
        margin: 0 auto;
        padding: 0;
        width: 400px;
    }
`

function RegisterForm() {
    return (
        <FormContainer>
            <form>
                <FormInput label="Username" type="text" name="name" placeholder="Add a username"/>
                <FormInput label="Email" type="email" name="email" placeholder="Add your email address"/>
                <FormInput label="Password" type="password" name="password" placeholder="Insert a password" />
                <FormInput type="submit" name="submit" value="Register" />
            </form>     
        </FormContainer>
    )
}

export default RegisterForm;