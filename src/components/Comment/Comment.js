import {Link} from "react-router-dom";

export function Comment({comment}) {

    const {id, postId, name, email, body} = comment

    return (
        <div>
            <div>id:{id}</div>
            <div>postId:{postId}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <div>body:{body}</div>
            <Link to={comment.postId.toString()}>Post info</Link>
        </div>

    );
}