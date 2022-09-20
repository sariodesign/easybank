import Page from '../layouts/Page';
import Main from '../layouts/Main';
import RequestForm from '../components/RequestForm';

function Register() {

    return (
        <Page>
            <Main itemsCentered>
                <RequestForm />
            </Main>
        </Page>
    )
}

export default Register;