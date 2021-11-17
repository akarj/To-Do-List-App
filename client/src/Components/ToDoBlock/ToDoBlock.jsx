import React from "react";
import ListItems from "../ListItems/ListItems";

const ToDoBlock = () => {
  return (
    <div className="ToDoContainer">
      <div className="mainTodo">
        <ListItems />
      </div>
      <div className="subTodo">
        <ListItems />
      </div>
    </div>
  );
};

export default ToDoBlock;
