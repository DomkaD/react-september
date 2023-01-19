import {useEffect, useState} from "react";


import {postService} from "../services/postService";
import {Post} from "../Post/Post";
import PostInf from "../PostInf/PostInf";

export function Posts() {
        
    let[posts, SetPosts] = useState([])
    let[post, SetPost] = useState(null)

    function ShowPosts(obj) {
        SetPost(obj)
    }
    useEffect(() => {
        postService.getAll().then(({data})=>SetPosts(data))
    }, [])
    
    return (
        <div>
            {post&&<PostInf post={post}/>}
            {posts.map(post=><Post key={post.id} post={post} ShowPosts={ShowPosts}/>)}
        </div>
    );
}