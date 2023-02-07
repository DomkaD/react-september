import {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";

import {postActions} from "../../redux";
import {Post} from "../Post/Post";


export function Posts() {

    const dispatch = useDispatch();
    const {posts,errors} = useSelector(state => state.posts)

    useEffect(() => {
        dispatch(postActions.getAll())
    }, [])

    return (
        <div>

            {errors && JSON.stringify(errors)}
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
}