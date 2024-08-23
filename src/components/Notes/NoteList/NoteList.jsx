import React from "react";
import classes from './NoteList.module.css'

export class NoteList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={classes.notesListHolder}>
                <ul>{this.props.children}</ul>
            </div>
        )
    }
}