import React, { useContext, useState } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { TaskContext } from '../utils/TaskContext'
import Card from "./Card";
import NewCard from './CardEditor'

export default function Cards(props) {
    const { data } = useContext(TaskContext)
    const [addingCard, setAddingCard] = useState(false)

        return (
            <div>
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



