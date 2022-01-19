import React, { useEffect } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
// import { getUsers } from "../../actions/userActions";
import { getAllUsers } from "../../services/user.service";
import "./User.css";
import Table from "../../components/table/Table";

const User = () => {
  //   const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.ui);

  console.log(user);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const result = await getAllUsers();
        console.log(result);
        if (result.status === 200) {
          const payload = {
            user: result.data,
          };
          dispatch(uiActions.loadUser(payload));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, [user, dispatch]);

  //   const { isLoggedIn } = useSelector((state) => state.auth);
  //   const { message, status } = useSelector((state) => state.ui);

  return (
    <div className="user-center">
      <h2>List of Users</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Color</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="user-tbody">
          {user.map((e, index) => (
            <Table
              key={e._id}
              id={e._id}
              name={e.name}
              age={e.age}
              color={e.color}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
