///// Creating Trello Columns
//////////////////////////////////////////////
import React, { useContext, useState } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { TaskContext } from '../utils/TaskContext'
import Card from "./Card";
import NewCard from './CardEditor'
import ColumnEditor from "./ColumnEditor";

export default function Cards(props) {
    const { data } = useContext(TaskContext)
    const [addingCard, setAddingCard] = useState(false)
    const [editingColumn, setEditingColumn] = useState(false)


        return (
            <div className="Column" key={props.index}>

                {!editingColumn
                    ? <div className="Column-Title" key={props.index}>
                        <div>
                            {data.columns[props.id].title}
                            <div className="Card-Edits"
                                onClick={() => setEditingColumn(!editingColumn)} >
                                Edit
                                </div>
                        </div>

                    </div>
                    : <ColumnEditor
                        title={data.columns[props.id].title}
                        columnid={props.id}
                        mode={"EDIT"}
                        closeEdit={() => setEditingColumn(!editingColumn)} />
                }
                <Droppable droppableId={props.id} key={props.id} type="TASK" >
                    {(provided, snapshot) => (
                    <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className="Cards">
                            {data.columns[props.id].taskIds.map((task, index) => (
                            <Draggable key={task} draggableId={task} index={index} >
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    ><div>
                                                <Card
                                                    key={task}
                                                    task={data.tasks[task]}
                                                    columnid={props.id} />
                                        </div>
                                    </div>
                                    )}
                                </Draggable>
                        ))}
                            {provided.placeholder}
                        {addingCard ?
                            <NewCard
                                content={""}
                                columnid={props.id}
                                closeEdit={() => setAddingCard(!addingCard)}
                            />
                            : <div
                                onClick={() => setAddingCard(!addingCard)}
                                className="Column-Add-Card"
                            >+ Add Card</div>}
                        </div>
                    )}
            </Droppable>
            </div>
        )
}



