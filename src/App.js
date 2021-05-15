import './App.css';
import Column from "./components/Column";


function App() {
  return (
    <div className="App">
      <div className="App-header">Trellox</div>
      <div className="App-body">
        <Column columnid={"1"} />
        <Column columnid={"2"} />
        <Column columnid={"3"} />
        <div className="Add_Column">+ Add Column</div>
      </div>

    </div>
  );
}

export default App;
