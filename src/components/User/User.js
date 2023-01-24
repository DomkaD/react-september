const User = ({user}) => {
    const {id, name, username, email} = user;
    return (
        <div>
            <h2>id:{id} name:{name} username:{username}</h2>
            <p>email:{email}</p>
        </div>
    );
}


export {User};