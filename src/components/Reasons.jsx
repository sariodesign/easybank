import IntroSection from '../layouts/IntroSection';
import Content from '../layouts/Content';
import GridFourBlock from '../layouts/GridFourBlock';

const reasons = [
    {
        image: 'icon-online.svg',
        title: 'Online banking',
        abstract: 'Our modern web and mobile applications allow to you keep track your finances wherever you are in the world.'
    },
    {
        image: 'icon-budgeting.svg',
        title: 'Simple Budgeting',
        abstract: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.'
    },
    {
        image: 'icon-onboarding.svg',
        title: 'Fast Onboarding',
        abstract: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'
    },
    {
        image: 'icon-api.svg',
        title: 'Open API',
        abstract: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'
    }
]

function Reason() {
    return (
        <Content bg="var(--light-grayish-blue)">
            <IntroSection 
                title="Why choose Easybank?"
                subtitle="We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before."
            />
            <GridFourBlock items={reasons} icon centered={true} limit={4} />
        </Content>
    )
}

export default Reason