import React from "react";
import ListItems from "../ListItems/ListItems";

const ToDoBlock = ({ ToDoListData }) => {
  return (
    <div className="ToDoContainer">
      {/* {console.log(ToDoListData)} */}
      {ToDoListData.map(Item => (
        <ListItems Item={Item} key={Item.id} />
      ))}
    </div>
  );
};

export default ToDoBlock;
