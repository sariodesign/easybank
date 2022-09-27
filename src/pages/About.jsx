import Page from '../layouts/Page';
import Hero from '../components/Hero';
import IntroSection from '../layouts/IntroSection';
import Content from '../layouts/Content';

function About() {

    return (
        <Page>
            <Hero 
                title="About page digital banking" 
                subtitle="Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing and much more."
            />
            <Content bg="var(--light-grayish-blue)">
                <IntroSection 
                    title="Why choose Easybank?"
                    subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                />
            </Content>
        </Page>
    )
}

export default About;