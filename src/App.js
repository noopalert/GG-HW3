import './App.css'
import { Provider } from 'react-redux';
import store from './Redux/store';
// import Index from './spotify/Index.js'
import Routes from './router/route';



function App() {
  return (
    <Provider store={store}>
     <div className='App'>
      <Routes/>
     </div>
    </Provider>
  )
}


export default App;
