import { useContext } from "react";
import { DragDropContext, } from "react-beautiful-dnd";
import Cards from "./Cards";
import { TaskContext } from '../utils/TaskContext'


export default function Column(props) {

    const { data, setData } = useContext(TaskContext)
    // a little function to help us with reordering the result
    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };


    const onDragEnd = (result) => {
        const { destination, source } = result
        // dropped outside the list
        if (!destination) {
            return;
        }

        const items = reorder(
            data.columns[source.droppableId].taskIds,
            source.index,
            destination.index
        );
        setData({
            ...data,
            columns: {
                ...data.columns,
                [source.droppableId]: {
                    ...data.columns[source.droppableId],
                    taskIds: items
                }
            }
        })
    }
    const column = data.columns[props.id]
        return (
            <DragDropContext onDragEnd={onDragEnd} >
            <div className="Column">
                    <div className="Column-Title">{column.title}</div>
                    <Cards key={props.id} id={props.id} index={props.id} />
            </div>
            </DragDropContext>
        )
}

