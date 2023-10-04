import axios from "axios";
import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { BASE_URL } from "../utils/constent";

const List = ({ task, id, setUpdateUI, updateMode }) => {
  const removeTask = () => {
    axios.delete(`${BASE_URL}/delete/${id}`).then((res) => {
      console.log(res);
      setUpdateUI((prevState) => !prevState);
    });
  };

  return (
    <li
      style={{
        margin: "4vmax",
        display: "flex",
        backgroundColor: "grey",
        padding: "1vmax",
      }}
    >
      {task}
      <div style={{ marginLeft: "2vmax" }}>
        <FaEdit
          onClick={() => updateMode(id, task)}
          style={{ cursor: "pointer" }}
        />
        <FaTrash
          onClick={removeTask}
          style={{ marginLeft: "1vmax", cursor: "pointer" }}
        />
      </div>
    </li>
  );
};

export default List;
