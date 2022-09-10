import './App.css';
import ItemCounts from './Components/ItemCounts/ItemCounts';

function App() {

  const agregar = (cantidad) => {
    alert(`${cantidad} Productos agregados al carrito`)
  }

  return (
    <div className="App">
      <header className="App-header">
        <ItemCounts cont={1} stockproductos={5} agregar={agregar}/>
      </header>
    </div>
  );
}

export default App;
