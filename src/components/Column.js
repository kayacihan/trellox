///// Creating Trello Columns to store task list
//////////////////////////////////////////////
import { useContext, useState } from "react";
import { DragDropContext, } from "react-beautiful-dnd";
import Cards from "./Cards";
import { TaskContext } from '../utils/TaskContext'
import DragEnd from '../utils/Dnd'


export default function Column(props) {
    const { data, setData } = useContext(TaskContext)
    const [editingColumn, setEditingColumn] = useState(false)
    const onDragEnd = result => DragEnd({ result, data, setData })


    return (
        <DragDropContext onDragEnd={onDragEnd}  >
            {props.columns.map((columnId, index) => {
                return (<Cards key={columnId} id={columnId} index={index} />)
            })}
        </DragDropContext>
    )
}

