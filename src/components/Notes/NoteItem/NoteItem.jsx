import classes from './NoteItem.module.css'

const NoteItem = (props) => {
    return (
        <li className={classes.item}><span>{props.note}</span>
            <button data-index={props.id} onClick={props.delete}>Delete note</button>
        </li>
    );
};

export default NoteItem;