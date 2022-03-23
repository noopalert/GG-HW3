import './App.css';
import data from './data/data.js'


function App() {
  return (
    <div className="App">
      <div className='container'>
        <img className="image" src={data.album.images[1].url} alt="bohemian"></img>
        <p>{data.album.name}</p>
        <p>{data.album.artists[0].name}</p>
        <button type='button' onClick="alert('select')">Select</button>
      </div>
    </div>
  );
}

export default App;
