import IntroSection from '../layouts/IntroSection';
import Content from '../layouts/Content';
import GridFourBlock from '../layouts/GridFourBlock';

const articles = [
    {
        image: 'image-currency.jpg',
        author: 'By Claire Robinson',
        title: 'Receive money in any currency with no fees',
        abstract: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single'
    },
    {
        image: 'image-restaurant.jpg',
        author: 'By Wilson Hutton',
        title: 'Treat yourself without worrying about money',
        abstract: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you'
    },
    {
        image: 'image-plane.jpg',
        author: 'By Wilson Hutton',
        title: 'Take your Easybank card wherever you go',
        abstract: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you.'
    },
    {
        image: 'image-confetti.jpg',
        author: 'By Claire Robinson',
        title: 'Our invite-only Beta accounts are now live!',
        abstract: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site.'
    },
    {
        image: 'image-currency.jpg',
        author: 'By Claire Robinson',
        title: 'Receive money in any currency with no fees',
        abstract: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single'
    },
    {
        image: 'image-restaurant.jpg',
        author: 'By Wilson Hutton',
        title: 'Treat yourself without worrying about money',
        abstract: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you'
    },
    {
        image: 'image-plane.jpg',
        author: 'By Wilson Hutton',
        title: 'Take your Easybank card wherever you go',
        abstract: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you.'
    },
    {
        image: 'image-confetti.jpg',
        author: 'By Claire Robinson',
        title: 'Our invite-only Beta accounts are now live!',
        abstract: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site.'
    }
]

function Articles({limit}) {
    return (
        <Content bg="#fafafa">
            <IntroSection 
                title="Latest articles"
            />
            <GridFourBlock items={articles} bg="var(--white)" pad="30px" limit={limit} />
        </Content>
    )
}

export default Articles