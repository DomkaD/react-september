import {useSelector} from "react-redux";

export function Header() {
    const {selectedUser} = useSelector(state => state.users)
    const {selectedPost} = useSelector(state => state.posts)

    return (
        <div>
            {selectedUser&& selectedUser.name}
            {selectedPost&& selectedPost.title}
        </div>
    );
}