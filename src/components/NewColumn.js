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
    const myChangeHandler = (event) => {
        setTitle(event.target.value);
    }
    return (
        <div className="Column-Title-Edit">
            <input
                type='text'
                value={title}
                className="Column-Title-Edit"
                placeholder="Enter card title..."
                onChange={myChangeHandler}
            />
            <button
                type="button"
                onClick={mySubmitHandler}
            >Save</button>
            <button
                type="button"
                onClick={params.closeEdit}
            >Cancel</button>
        </div>
    );
}