import './App.css';
import Column from "./components/Column";

function App() {
  return (
    <div className="App">
      <div className="App-header">Trellox</div>
      <div className="App-body">
        <Column />
        <Column />
        <Column />
        <div className="Add_Column">+ Add Column</div>
      </div>

    </div>
  );
}

export default App;
