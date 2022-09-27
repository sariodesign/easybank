import Page from '../layouts/Page';
import Hero from '../components/Hero';
import Articles from '../components/Articles';

function Blog() {

    return (
        <Page>
            <Hero 
                title="Blog page digital banking" 
                subtitle="Read our articles"
            />
            <Articles limit={8} />
        </Page>
    )
}

export default Blog;