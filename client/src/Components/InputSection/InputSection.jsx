import "./InputSection.scss";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { useState } from "react";
const InputSection = ({ addTaskToList }) => {
  const [taskInInputField, setTaskInInputField] = useState("");

  // TODO: Function
  // function for Add Item Button Click to make input field Empty
  const addItemButtonClickHandler = () => {
    if (taskInInputField === "") return;
    addTaskToList(taskInInputField);
    setTaskInInputField("");
  };

  return (
    <div className="inputSectionContainer">
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        className="inputSectionContaingStack"
      >
        <TextField
          id="outlined-basic"
          label="Add a task..."
          variant="outlined"
          className="inputField"
          value={taskInInputField}
          onChange={e => setTaskInInputField(e.target.value)}
          maxRows="1"
        />
        <Button
          variant="contained"
          startIcon={<AddTaskIcon />}
          size="large"
          className="Button"
          onClick={addItemButtonClickHandler}
        >
          Add Item
        </Button>
      </Stack>
    </div>
  );
};

export default InputSection;
