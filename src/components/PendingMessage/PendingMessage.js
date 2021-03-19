import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PendingMessage.css";

export default class PendingMessage extends Component {
    static defaultProps = {
        onDeleteClick: () => {},
    };

    handleDeleteClick = (ev) => {
        ev.preventDefault();
        this.props.onDeleteClick();
    };

    render() {
        const pending = this.props.pending;
        return ( <
            div className = "PendingMessage" >
            <
            button aria - label = "delete"
            onClick = { this.handleDeleteClick } >
            x <
            /button> <
            p className = "outer_item" >
            From: < span > { pending.user.username } < /span> <
            /p> <
            p className = "inner_item" >
            Content: { " " } <
            Link to = { `/messages/${pending.id}` } >
            <
            span > { pending.message.substring(0, 20) }...click to see more <
            /span> <
            /Link> <
            /p> <
            p className = "outer_item" >
            Contact: { " " } <
            span >
            <
            a href = { `mailto:${pending.user.email}` } > { pending.user.email } < /a> <
            /span> <
            /p> <
            /div>
        );
    }
}