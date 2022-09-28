import Page from '../layouts/Page';
import Hero from '../components/Hero';
import IntroSection from '../layouts/IntroSection';
import Content from '../layouts/Content';
import RequestForm from '../components/RequestForm';

function Request() {

    return (
        <Page>
            <Hero 
                title="Request page digital banking" 
                subtitle="Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing and much more."
            />
            <Content bg="var(--light-grayish-blue)">
                <IntroSection 
                    title="Request information"
                    subtitle="Our Consultants are at your disposal to provide you with more information about our products and services. Leave your details and you will be contacted shortly."
                />
                <RequestForm />
            </Content>
        </Page>
    )
}

export default Request;