import React, { Component } from "react";
import Cards from "./Cards";
class Column extends Component {
    render() {
        return (
            <div className="Column">
                <div className="Column-Title">title</div>
                <Cards />
            </div>
        )
    }
}

export default Column