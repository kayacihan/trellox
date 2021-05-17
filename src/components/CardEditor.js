import { useState, useContext } from 'react';
import { TaskContext } from '../utils/TaskContext'
import { operation, reducer } from '../utils/DataOperation'

export default function NewCard(params) {
    const [content, setContent] = useState(params.content ? params.content : "")
    const { data, setData } = useContext(TaskContext)
    const editing = params.mode === "EDIT"

    const mySubmitHandler = (e) => {
        setData(!editing
            ? operation({
                reducer: reducer.ADD_NEW_CARD, data: { content, data, columnid: params.columnid }
            })
            : operation({ reducer: reducer.EDIT_CARD, data: { content, data, taskid: params.taskid } })
        )
        params.closeEdit()
    }

    const mySubmitDeletion = (e) => {
        setData(
            operation({ reducer: reducer.DELETE_CARD, data: { data, taskid: params.taskid, columnid: params.columnid } })
        )
        params.closeEdit()
    }

    return (
        <div className="Card-Editor">
            <input
                type='text'
                value={content}
                placeholder="Enter card content..."
                onChange={(e) => setContent(e.target.value)}
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
        </div>
    );
}