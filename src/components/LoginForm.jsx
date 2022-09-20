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

function LoginForm() {
    return (
        <FormContainer>
            <form>
                <FormInput label="Username" type="text" name="name" placeholder="Add your username" />
                <FormInput label="Password" type="password" name="password" placeholder="Insert your password" />
                <FormInput type="submit" name="submit" value="Login" />

            </form>     
        </FormContainer>
    )
}

export default LoginForm;