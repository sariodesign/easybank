import Page from './layouts/Page';
import Main from './layouts/Main';
import Hero from './components/Hero';
import Reasons from './components/Reasons';
import Articles from './components/Articles';

function App() {
  return (
    <Page>
      <Main>
        <Hero
          title="Next generation digital banking" 
          subtitle="Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing and much more." />
        <Reasons />
        <Articles limit={4} />
      </Main>
    </Page>
  )
}

export default App
