import Page from './layouts/Page';
import Main from './layouts/Main';
import Hero from './components/Hero';
import Reasons from './components/Reasons';
import Articles from './components/Articles';

function App() {
  return (
    <Page>
      <Main>
        <Hero />
        <Reasons />
        <Articles />
      </Main>
    </Page>
  )
}

export default App
