
import HeroHeader from './components/HeroHeader/HeroHeader';
import BodyWrapper from './components/BodyWrapper/BodyWrapper';
import DataTable from './components/DataTable/DataTable';

import './App.scss'

const App = () => {
  return (
    <div className="App">
      <HeroHeader />
      <BodyWrapper>
          <DataTable />
      </BodyWrapper>
    </div>
  )
}

export default App;
