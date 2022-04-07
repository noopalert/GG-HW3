import './App.css'
import { Provider } from 'react-redux';
import store from './Redux/store';
import Index from './spotify/Index.js'



function App() {
  return (
    <Provider store={store}>
     <div className='App'>
      <Index/>
     </div>
    </Provider>
  )
}


export default App;
