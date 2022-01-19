import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userAdd } from "../../actions/userActions";

import "./AddUser.css";

const AddUser = () => {
  const dispatch = useDispatch();

  const initialState = {
    name: "",
    age: "",
    color: "",
  };
  const [state, setState] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    dispatch(userAdd(state));
  };
  return (
    <div className="add-user">
      <h2>Add a User</h2>
      <form className="addUser-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={(e) =>
              setState((state) => ({ ...state, name: e.target.value }))
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="text"
            name="age"
            value={state.age}
            onChange={(e) =>
              setState((state) => ({ ...state, age: e.target.value }))
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="color">Color</label>
          <input
            type="text"
            name="color"
            value={state.color}
            onChange={(e) =>
              setState((state) => ({ ...state, color: e.target.value }))
            }
          />
        </div>
        <button className="btn add-btn">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
