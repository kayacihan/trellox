import React, { useContext, useState } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Card from "./Card";
import { TaskContext } from '../utils/TaskContext'
import NewCard from './NewCard'

export default function Cards(props) {
    const { data } = useContext(TaskContext)
    const [addingCard, setAddingCard] = useState(false)

        return (
            <Droppable droppableId={props.id} key={props.id} >
                    {(provided, snapshot) => (
                    <div
                            ref={provided.innerRef} className="Cards">
                        {data.columns[props.index].taskIds.map((task, index) => (
                            <Draggable key={task} draggableId={task} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        >
                                        <Card key={task} task={data.tasks[task].content} />
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
        )

}



