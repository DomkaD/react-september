export function Post({post, ShowPosts}) {

    return (
        <div>
            <h1>{post.id} - {post.title}</h1>
            <button onClick={() => ShowPosts(post)}>Posts Details</button>
        </div>
    );
}