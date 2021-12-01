import './App.scss';
import { Main } from './js_modules/main';
import { BrowserRouter } from 'react-router-dom';


function App() {

  return (
   <BrowserRouter>
    <div className="App">
      <div className="app__container">
          <Main />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
