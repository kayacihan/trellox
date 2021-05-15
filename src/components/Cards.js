import React, { Component } from "react";
import Card from "./Card";

class Cards extends Component {
    render() {
        return (
            <div className="Cards">
                <Card />
                <Card />
                <Card />
            </div>
        )
    }
}

export default Cards