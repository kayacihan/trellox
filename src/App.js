import React, { useState, useMemo } from "react";
import './App.css';
import Column from "./components/Column";
import NewColumn from "./components/NewColumn";
import initData from './utils/initial-data'
import { TaskContext } from './utils/TaskContext'
import operation from './utils/DataOperation'

function App() {
  const [data, setData] = useState(initData)
  const [addingColumn, setAddingColumn] = useState(false)

  const value = useMemo(() => ({ data, setData }), [data, setData]);
  return (
    <div className="App">
      <div className="App-header">Trellox</div>
      <div className="App-body">
        <TaskContext.Provider value={value}>
          {
            data.columnOrder.map(columnId => {
              console.log(columnId)
              console.log(data.columns[columnId])
              const column = data.columns[columnId].id
              return <Column key={column} id={column} />
            }
            )}
          {addingColumn === true
            ? <NewColumn
              title={""}
              closeEdit={() => setAddingColumn(!addingColumn)}
            />
            : <div
              className="Add_Column"
              onClick={() => setAddingColumn(!addingColumn)}
            >+ Add Column</div>
          }
        </TaskContext.Provider>
      </div>

    </div>




  );
}

export default App;
