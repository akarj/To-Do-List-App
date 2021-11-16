import "./InputSection.scss";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ListItems from "../ListItems/ListItems";

const InputSection = () => {
  return (
    <div className="inputSection">
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="contained" size="large">
        Add Item
      </Button>
      <ListItems />
    </div>
  );
};

export default InputSection;
