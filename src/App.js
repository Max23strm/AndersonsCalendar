import Rutas from './components/Router/Rutas';
import data from './assets/data/data.json'
import './App.css';

function App() {
  return (
    <div className="App">
      <Rutas data={data}/>
    </div>
  );
}

export default App;
