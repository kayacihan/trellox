import React, { useState, useMemo, useEffect } from "react";
import './App.css';
import Column from "./components/Column";
import ColumnEditor from "./components/ColumnEditor";
import initData from './utils/initial-data'
import { TaskContext } from './utils/TaskContext'

function App() {
  const [data, setData] = useState({}) // main data
  const [addingColumn, setAddingColumn] = useState(false) //control for adding column 
  const value = useMemo(() => ({ data, setData }), [data, setData]);

  //set initial data from json if localstorage is null
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("trellox"))
    if (storedData)
      setData(JSON.parse(localStorage.getItem("trellox")))
    else
      setData(initData)
  }, []);

  //update localStorage after every update
  useEffect(() => {
    localStorage.setItem('trellox', JSON.stringify(data))
  }, [data, setData]);

  return (
    <TaskContext.Provider value={value}>
      {data.columnOrder && <Column columns={data.columnOrder} />}
          {addingColumn
        ? <ColumnEditor closeEdit={() => setAddingColumn(!addingColumn)} />
        : <div className="Add_Column" onClick={() => setAddingColumn(!addingColumn)}
        >+ Add Column</div>}
    </TaskContext.Provider>
  );
}

export default App;
