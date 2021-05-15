import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Card from "./Card";


// fake data generator
const getItems = count =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `item-${k}`,
        content: `item ${k}`
    }));


// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: getItems(5)
        };
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragEnd(result) {
        const { destination, source } = result

        // dropped outside the list
        if (!destination) {
            return;
        }

        const items = reorder(
            this.state.items,
            source.index,
            destination.index
        );

        this.setState({
            items
        });
    }

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId={this.props.columnid}>
                    {(provided, snapshot) => (
                        <div  {...provided.droppableProps}
                            ref={provided.innerRef} className="Cards">
                            {this.state.items.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <Card context={item.content} />

                                        </div>
                                    )}
                                </Draggable>
                            ))}

                            {provided.placeholder}

                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        )
    }
}

export default Cards

