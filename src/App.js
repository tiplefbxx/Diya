import './App.scss';
import { Main } from './js_modules/main';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './state/store';


function App() {

  return (
  <BrowserRouter>
    <Provider store={store}>
     <div className="App">
       <div className="app__container">
          <Main />
       </div>
     </div>
    </Provider>
  </BrowserRouter>
  );
}

export default App;
