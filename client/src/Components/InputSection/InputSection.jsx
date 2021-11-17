import "./InputSection.scss";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddTaskIcon from "@mui/icons-material/AddTask";
const InputSection = () => {
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
          autoFocus
          className="inputField"
        />
        <Button
          variant="contained"
          startIcon={<AddTaskIcon />}
          size="large"
          className="Button"
        >
          Add Item
        </Button>
      </Stack>
    </div>
  );
};

export default InputSection;
