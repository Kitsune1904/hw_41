import classes from "./AlbumCard.module.css"
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

export const AlbumCard = (props) => {
  return (
    <div>
      <Link to={`/albums/${props.card.id}`} className={classes.card}>
        <h2>Card {props.card.id}</h2>
        <p>{props.card.title}</p>
      </Link>
    </div>
  );
};

AlbumCard.propTypes = {
  card: PropTypes.object
}
