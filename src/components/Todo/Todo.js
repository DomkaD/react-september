export function Todo({todo}) {

    const {id,userId,title} = todo;

    return (
        <div>
            <div>id:{id}</div>
            <div>userId:{userId}</div>
            <div>title:{title}</div>
        </div>
    );
}