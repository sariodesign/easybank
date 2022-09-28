import styled from 'styled-components';
import Page from '../layouts/Page';
import Hero from '../components/Hero';
import IntroSection from '../layouts/IntroSection';
import Content from '../layouts/Content';
import FormInput from '../subcomponents/FormInput';

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

function Contact() {

    return (
        <Page>
            <Hero 
                title="Contact page digital banking" 
                subtitle="Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing and much more."
            />
            <Content bg="var(--light-grayish-blue)">
                <IntroSection 
                    title="Request information"
                    subtitle="Our Consultants are at your disposal to provide you with more information about our products and services. Leave your details and you will be contacted shortly."
                />
                <FormContainer>
                    <FormInput label="Name" />
                    <FormInput label="Surname" />
                    <FormInput label="Email" />
                    <FormInput label="Phone" />
                    <FormInput label="Address" />
                    <FormInput label="ZIP Code" />
                    <FormInput value="Send" type="submit" submit={true} />
                </FormContainer>
            </Content>
        </Page>
    )
}

export default Contact;