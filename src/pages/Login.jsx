import Page from '../layouts/Page';
import Main from '../layouts/Main';
import LoginForm from '../components/LoginForm';

function Login() {

    return (
        <Page>
            <Main itemsCentered>
                <LoginForm />
            </Main>
        </Page>
    )
}

export default Login;