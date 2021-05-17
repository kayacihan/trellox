import { useContext } from "react";
import { DragDropContext, } from "react-beautiful-dnd";
import Cards from "./Cards";
import { TaskContext } from '../utils/TaskContext'
import DragEnd from '../utils/Dnd'

export default function Column(props) {
    const { data, setData } = useContext(TaskContext)
    const onDragEnd = result => DragEnd({ result, data, setData })

    return (
        <DragDropContext onDragEnd={onDragEnd}  >
            {props.columns.map((columnId, index) => {
                return (
                    <div className="Column" key={index}>
                        <div className="Column-Title" key={index}>{data.columns[columnId].title}</div>
                        <Cards key={columnId} id={columnId} index={index} />
                    </div>)
            })}
        </DragDropContext>
    )
}

