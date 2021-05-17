import React, { useState } from "react";
import NewCard from './CardEditor'

export default function Card(props) {
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


