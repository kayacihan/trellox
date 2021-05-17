import { useState, useContext } from 'react';
import { TaskContext } from '../utils/TaskContext'
import operation from '../utils/DataOperation'

export default function NewColumn(params) {
    const [title, setTitle] = useState(params.title ? params.title : "")
    const { data, setData } = useContext(TaskContext)

    const mySubmitHandler = (e) => {
        setData(operation({ reducer: "ADD_NEW_COLUMN", data: { title, data } }))
        params.closeEdit()
    }

    return (
        <div className="Column-Add-Card" >
            <input
                type='text'
                value={title}
                placeholder="Enter card title..."
                onChange={(e) => setTitle(e.target.value)}
            />
            <div className="Edit-Buttons">
            <button
                type="button"
                onClick={mySubmitHandler}
            >Save</button>
            <button
                type="button"
                onClick={params.closeEdit}
            >Cancel</button>
            </div>
        </div >
    );
}