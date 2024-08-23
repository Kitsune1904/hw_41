import {NavLink} from "react-router-dom";
import classes from './Navigaton.module.css'

export const Navigation = () => {
  return (
    <nav className={classes.navHolder}>
        <ul>
            <li><NavLink to={"/"} className={({isActive}) => isActive ? classes.active : ''}>Main</NavLink></li>
            <li><NavLink to={"/albums"} className={({isActive}) => isActive ? classes.active : ''}>Albums</NavLink></li>
            <li><NavLink to={"/about"} className={({isActive}) => isActive ? classes.active : ''}>About</NavLink></li>
            <li><NavLink to={"/notes"} className={({isActive}) => isActive ? classes.active : ''}>Notes</NavLink></li>

        </ul>
    </nav>

  )
}

