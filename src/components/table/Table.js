import React from "react";
import "./Table.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import { deleteUser } from "../../services/user.service";
import { useSelector, useDispatch } from "react-redux";
import { userDelete } from "../../actions/userActions";

const Table = (props) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.ui);

  console.log(user, props);
  const handleDelete = (e, id) => {
    console.log(id, e.currentTarget);
    dispatch(userDelete(id));
  };
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.age}</td>
      <td>{props.color}</td>
      <td>
        <button className="icon-btn edit">
          <FaEdit />
        </button>
        <button
          className="icon-btn delete"
          onClick={(e) => handleDelete(e, props.id)}
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default Table;
