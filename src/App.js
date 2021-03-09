import logo from './logo.svg';
import {Provider} from 'react-redux'
import './App.css';
import store from './components/redux/store';
import Cackecont from './Cackecont';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>tttttttaauiunmm</h1>
      <Cackecont/>
    </div>
    </Provider>
  );
}

export default App;
