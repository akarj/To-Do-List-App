import "./ListItems.scss";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Checkbox from "@mui/material/Checkbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const ListItems = ({ Item }) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{
        width: "35rem",
        bgcolor: "background.paper",
      }}
      component="nav"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <Checkbox />
        </ListItemIcon>
        <ListItemText primary={Item.text} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {Item.subtasks.map(subtask => (
            <ListItemButton sx={{ pl: 4 }} key={subtask.id}>
              <ListItemIcon>
                <Checkbox
                  checked={subtask.Status === "completed" ? true : false}
                />
              </ListItemIcon>
              <ListItemText primary={subtask.text} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </List>
  );
};

export default ListItems;
