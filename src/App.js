import logo from './logo.svg';
import './App.css';

import Topo from './components/Topo';
import Rotas from './rotas';
import Rodape from './components/Rodape';

function App() {
  return (
    <div className="App">
      <Topo />
      <Rotas />
      <Rodape />
    </div>
  );
}

export default App;
