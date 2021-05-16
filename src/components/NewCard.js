import { useState, useContext } from 'react';
import { TaskContext } from '../utils/TaskContext'
import operation from '../utils/DataOperation'

export default function NewCard(params) {
    const [content, setContent] = useState(params.content ? params.content : "")
    const { data, setData } = useContext(TaskContext)

    const mySubmitHandler = (e) => {
        setData(operation({ reducer: "ADD_NEW_CARD", data: { content, data, columnid: params.columnid } }))
        params.closeEdit()
    }
    const myChangeHandler = (event) => {
        setContent(event.target.value);
    }
    return (
        <div className="Card-Edit">
            <input
                type='text'
                value={content}
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