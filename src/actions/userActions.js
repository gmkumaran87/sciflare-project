// import { authActions } from "../store/auth-slice";
import { uiActions } from "../store/ui-slice";

import { getAllUsers, createUser, deleteUser } from "../services/user.service";

const getUsers = async() => {
    return async(dispatch) => {
        try {
            console.log("Inside UserActions");
            const result = await getAllUsers();
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };
};

const userDelete = (id) => {
    return async(dispatch) => {
        console.log("Before delte user", id);
        try {
            console.log("Before delte user", id);
            const result = await deleteUser(id);
            if (result.status === 200) {
                dispatch(
                    uiActions.showNotification({
                        status: "success",
                        message: "User Deleted successfully",
                    })
                );
            }
        } catch (error) {
            console.log(error);
        }
    };
};
export { getUsers, userDelete };