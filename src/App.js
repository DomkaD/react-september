import {useEffect, useState} from "react";

import {UserForm, Users} from "./components";
import {userService} from "./services";



function App() {

  let[users, setUsers] = useState([])

  useEffect(() => {
    userService.getAll().then(({data}) => setUsers([...data]))
  }, [])


  return (
    <div>

    <UserForm setUsers={setUsers}/>
      <hr/>
    <Users users={users}/>

    </div>
  );
}

export default App;
