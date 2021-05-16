import React, { useState, useMemo } from "react";
import './App.css';
import Column from "./components/Column";
import initData from './utils/initial-data'
import { TaskContext } from './utils/TaskContext'

function App() {
  const [data, setData] = useState(initData)
  const value = useMemo(() => ({ data, setData }), [data, setData]);
  return (
    <div className="App">
      <div className="App-header">Trellox</div>
      <div className="App-body">
        <TaskContext.Provider value={value}>
          {
            data.columnOrder.map(columnId => {
              const column = data.columns[columnId].id
              return <Column key={column} id={column} />
            }
            )}
        </TaskContext.Provider>
        <div className="Add_Column">+ Add Column</div>
      </div>
    </div>




  );
}

export default App;
