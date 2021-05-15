import React, { Component } from "react";
import Cards from "./Cards";
class Column extends Component {
    render() {
        return (
            <div className="Column">
                <div className="Column-Title">title</div>
                <Cards columnid={this.props.columnid} />
                <div className="Column-Add-Card">+ Add Card</div>
            </div>
        )
    }
}

export default Column