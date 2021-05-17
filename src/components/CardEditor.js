import { useState, useContext } from 'react';
import { TaskContext } from '../utils/TaskContext'
import operation from '../utils/DataOperation'

export default function NewCard(params) {
    const [content, setContent] = useState(params.content ? params.content : "")
    const { data, setData } = useContext(TaskContext)

    const mySubmitHandler = (e) => {
        setData(params.mode !== "EDIT"
            ? operation({ reducer: "ADD_NEW_CARD", data: { content, data, columnid: params.columnid } })
            : operation({ reducer: "EDIT_CARD", data: { content, data, taskid: params.taskid } })
        )
        params.closeEdit()
    }

    return (
        <div className="Card-Editor">
            <input
                type='text'
                value={content}
                placeholder="Enter card title..."
                onChange={(e) => setContent(e.target.value)}
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
        </div>
    );
}