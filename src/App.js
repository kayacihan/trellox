import React, { useState, useMemo, useEffect } from "react";
import './App.css';
import Column from "./components/Column";
import NewColumn from "./components/NewColumn";
import initData from './utils/initial-data'
import { TaskContext } from './utils/TaskContext'

function App() {
  const [data, setData] = useState({}) // main data
  const [addingColumn, setAddingColumn] = useState(false) //control for adding column 
  const value = useMemo(() => ({ data, setData }), [data, setData]);

  //set initial data from json if localstorage is null
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("ckckck"))
    if (storedData)
      setData(JSON.parse(localStorage.getItem("ckckck")))
    else
      setData(initData)
  }, []);

  //update localStorage after every update
  useEffect(() => {
    localStorage.setItem('ckckck', JSON.stringify(data))
  }, [data, setData]);

  return (
    <TaskContext.Provider value={value}>
      {data.columnOrder && <Column columns={data.columnOrder} />}
          {addingColumn
        ? <NewColumn closeEdit={() => setAddingColumn(!addingColumn)} />
        : <div className="Add_Column" onClick={() => setAddingColumn(!addingColumn)}
        >+ Add Column</div>}
    </TaskContext.Provider>
  );
}

export default App;
