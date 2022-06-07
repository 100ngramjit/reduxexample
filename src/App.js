
import './App.css';
import  CakeContainer  from './Components/CakeContainer';
import {Provider} from 'react-redux'
import store from './redux/Cake/store';
import HooksCakeContainer from './Components/HooksCakeContainer';

const App=()=> {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer/>
     <CakeContainer/>
    </div>
    </Provider>
    
  );
}

export default App;
