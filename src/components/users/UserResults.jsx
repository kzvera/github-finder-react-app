import { useSelector } from "react-redux";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";

const UserResults = () => {
    const users = useSelector(state => state.github.users);
    const loading = useSelector(state => state.github.loading);

    if (loading) {
        return <h3><Spinner /></h3>
    }

    return (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
            {users.map(user => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    )
}

export default UserResults