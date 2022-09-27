import Page from '../layouts/Page';
import Hero from '../components/Hero';
import IntroSection from '../layouts/IntroSection';
import Content from '../layouts/Content';
import Jobs from '../components/Jobs';

function Careers() {

    return (
        <Page>
           <Hero 
                title="Career page digital banking" 
                subtitle="Read our articles"
            />
            <Content bg="var(--light-grayish-blue)">
                <IntroSection 
                    title="Find your new job"
                    subtitle="Explore our positions"
                />
                <Jobs/>
            </Content>
        </Page>
    )
}

export default Careers;