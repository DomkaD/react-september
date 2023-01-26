import {NavLink, useNavigate} from "react-router-dom";

import css from './Header.module.css'

export function Header() {

    const navigate = useNavigate()

    return (
        <div className={css.Header}>
            <button onClick={()=>navigate(-1)}>Go Back</button>
            <button onClick={()=>navigate(1)}>Go Next</button>
            <NavLink to={"/"}>home</NavLink>
            <NavLink to={"/albums"}>albums</NavLink>
            <NavLink to={"/todos"}>todos</NavLink>
            <NavLink to={"/comments"}>comments</NavLink>
        </div>
    );
}