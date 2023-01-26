import {NavLink} from "react-router-dom";

import css from './Header.module.css'

export function Header() {

    return (
        <div className={css.Header}>
            <NavLink to={"/"}>home</NavLink>
            <NavLink to={"/albums"}>albums</NavLink>
            <NavLink to={"/todos"}>todos</NavLink>
            <NavLink to={"/comments"}>comments</NavLink>
        </div>
    );
}