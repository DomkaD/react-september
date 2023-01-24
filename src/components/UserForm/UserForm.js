import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {UserValidator} from "../../validators/UserValidator/UserValidator";
import {userService} from "../../services";


export function UserForm ({setUsers}) {
      const{register, handleSubmit, reset, setValue, formState:{errors, isValid}} = useForm({mode:'all', resolver: joiResolver(UserValidator)});

    const submit = async (user) =>{
         const{data} = await userService.create(user)
          setUsers(prev=>[...prev,data])
        reset()
    };


    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            {errors.name && <span>{errors.name.message}</span>}

            <input type="text" placeholder={'username'} {...register('username')}/>
            {errors.username && <span>{errors.username.message}</span>}

            <input type="text" placeholder={'email'} {...register('email')}/>
            {errors.email && <span>{errors.email.message}</span>}
            <button disabled={!isValid}>Save</button>
        </form>
    );
}
