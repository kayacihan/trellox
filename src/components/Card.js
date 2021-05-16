import React, { useState, useContext } from "react";
import { TaskContext } from '../utils/TaskContext'
import NewCard from './NewCard'

export default function Card(props) {
    const { data, setData } = useContext(TaskContext)
    const [editingCard, setEditingCard] = useState(false)
        return (
            <div className="Card">
                {!editingCard
                    ? <div>
                        {props.task.content}
                        <div className="Card-Edits">
                            <div className="Card-Edit"
                                onClick={() => setEditingCard(!editingCard)}
                            >
                                Edit
                    </div>
                        </div>
                    </div>
                    : <NewCard
                        mode={"EDIT"}
                        content={props.task.content}
                        taskid={props.task.id}
                        closeEdit={() => setEditingCard(!editingCard)}
                    />
                }

            </div>
        )
}


