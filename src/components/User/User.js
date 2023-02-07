import {useDispatch} from "react-redux";
import {userActions} from "../../redux";
import css from "./Button.module.css"

export function User({user}) {
    const {id, name, username} = user;

    const dispatch = useDispatch()

    return (
        <div className={css.card} >
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>username:{username}</div>
            <button onClick={() => dispatch(userActions.setSelectedUser(user))}>
                <span className={css.button_top}> Select</span>
            </button>
            <button onClick={() => dispatch(userActions.getById({id}))}>
                <span className={css.button_top}>Pick</span>
            </button>
        </div>
    );
}