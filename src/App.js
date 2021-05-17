import React, { useState, useMemo, useEffect } from "react";
import './App.css';
import Column from "./components/Column";
import NewColumn from "./components/NewColumn";
import initData from './utils/initial-data'
import { TaskContext } from './utils/TaskContext'

function App() {
  const [data, setData] = useState({})
  const [addingColumn, setAddingColumn] = useState(false)
  const value = useMemo(() => ({ data, setData }), [data, setData]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("ckckck"))
    if (storedData)
      setData(JSON.parse(localStorage.getItem("ckckck")))
    else
      setData(initData)
  }, []);

  useEffect(() => {
    localStorage.setItem('ckckck', JSON.stringify(data))
  }, [data, setData]);

  return (
    <div className="App">
      <div className="App-header">Trellox</div>
      <div className="App-body">
        <TaskContext.Provider value={value}>
          {data.columnOrder &&
            <Column columns={data.columnOrder} />
          }
          {addingColumn
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
