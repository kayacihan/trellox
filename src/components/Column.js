import { useContext } from "react";
import { DragDropContext, } from "react-beautiful-dnd";
import Cards from "./Cards";
import { TaskContext } from '../utils/TaskContext'


export default function Column(props) {

    console.log(props)

    const { data, setData } = useContext(TaskContext)
    // a little function to help us with reordering the result
    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    const move = (source, destination, droppableSource, droppableDestination) => {
        const sourceClone = Array.from(source);
        const destClone = Array.from(destination);
        const [removed] = sourceClone.splice(droppableSource.index, 1);

        destClone.splice(droppableDestination.index, 0, removed);

        const result = {};
        result[droppableSource.droppableId] = sourceClone;
        result[droppableDestination.droppableId] = destClone;

        return result;
    };

    const onDragEnd = (result) => {
        const { destination, source } = result
        console.log(result)
        // dropped outside the list
        if (!destination) { return; }

        if (source.droppableId === destination.droppableId) {
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

        } else {
            const items = move(
                data.columns[source.droppableId].taskIds,
                data.columns[destination.droppableId].taskIds,
                source,
                destination
            );

            setData({
                ...data,
                columns: {
                    ...data.columns,
                    [source.droppableId]: {
                        ...data.columns[source.droppableId],
                        taskIds: items[source.droppableId]
                    },
                    [destination.droppableId]: {
                        ...data.columns[destination.droppableId],
                        taskIds: items[destination.droppableId]
                    }
                }
            })
    }

    }

        return (
            <DragDropContext onDragEnd={onDragEnd} >
                {props.columns.map((columnId, index) => {
                    console.log(columnId)
                    return (
            <div className="Column">
                            <div className="Column-Title">{data.columns[columnId].title}</div>
                            <Cards key={columnId} id={columnId} index={columnId} />
                        </div>)
                })}
            </DragDropContext>
        )
}

