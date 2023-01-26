import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Post} from "../Post/Post";
import {jsonPlaceHolderService} from "../../services";






const Posts = () => {

    const {id}=useParams()

    const [posts,setPosts]=useState([])

    useEffect(()=>{
        jsonPlaceHolderService.getPostsById(id).then(({data})=>setPosts([{...data}]))
    },[id])

    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};