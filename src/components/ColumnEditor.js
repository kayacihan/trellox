///// using to create Columns
//////////////////////////////////////////////
import { useState, useContext } from 'react';
import { TaskContext } from '../utils/TaskContext'
import { operation, reducer } from '../utils/DataOperation'

export default function ColumnEditor(params) {
    const [title, setTitle] = useState(params.title ? params.title : "")
    const { data, setData } = useContext(TaskContext)
    const editing = params.mode === "EDIT"

    const mySubmitHandler = (e) => {
        setData(
            !editing
                ? operation({ reducer: reducer.ADD_NEW_COLUMN, data: { title, data } })
                : operation({ reducer: reducer.EDIT_COLUMN, data: { columnid: params.columnid, title, data } })
        )
        params.closeEdit()
    }
    const mySubmitDeletion = (e) => {
        if (window.confirm("Are you sure to delete column with all data !"))
            setData(
                operation({ reducer: reducer.DELETE_COLUMN, data: { data, columnid: params.columnid } })
            )
        params.closeEdit()
    }

    return (
        <div className="Column-Add-Card" >
            <input
                type='text'
                value={title}
                placeholder="Enter column title..."
                onChange={(e) => setTitle(e.target.value)}
            />
            <div className="Edit-Buttons">
                <button
                    type="button"
                    onClick={mySubmitHandler}
                >Save</button>
                {editing && <button
                    type="button"
                    onClick={mySubmitDeletion}
                >Delete</button>}
                <button
                    type="button"
                    onClick={params.closeEdit}
                >Cancel</button>
            </div>
        </div >
    );
}