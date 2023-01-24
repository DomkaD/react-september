import {User} from "../User/User";


export function Users({users}) {

    return (

        <div>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
}