import {useDispatch} from "react-redux";
import {postActions, userActions} from "../../redux";
import css from "./Button.module.css"

export function Post({post}) {
    const {id, userId, title} = post

    const dispatch = useDispatch()

    return (
        <div className={css.card} >
            <div>id:{id}</div>
            <div>userId:{userId}</div>
            <div>title:{title}</div>
            <button onClick={() => dispatch(postActions.setSelectedPost(post))}>
                <span className={css.button_top}>Select</span>
            </button>
            <button onClick={() => dispatch(postActions.getById(id))}>
                <span className={css.button_top}>Pick</span>
            </button>
        </div>
    );
}