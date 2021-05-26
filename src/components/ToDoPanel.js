import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { MenuItem, Button, Icon } from "@material-ui/core";
import Add from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(4),
      width: "50ch",
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export const ToDoPanel = () => {
  const classes = useStyles();

  const [task, setTask] = useState({
    id: new Date().getMinutes(),
    nameTask: "",
    description: "",
    priorityTask: "",
  });

  const priority = [
    {
      value: "High",
      label: "High",
    },

    {
      value: "Medium",
      label: "Medium",
    },

    {
      value: "Low",
      label: "Low",
    },
  ];

  const { nameTask, description, priorityTask } = task;

  const handleChange = ( e ) => {
    e.preventDefault();  
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleChange} className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          label="Name of task"
          name="nameTask"
          value={nameTask}
          onChange={handleChange}
          variant="standard"
          helperText="Type name task"
        />
      </div>
      <div>
        <TextField
          label="Description"
          multiline
          rowsMax={4}
          name="description"
          value={description}
          onChange={handleChange}
          helperText="Type description task"
        />
      </div>
      <div>
        <TextField  
          select
          name="priorityTask"
          label="Priority"
          value={priorityTask}
          onChange={handleChange}
          helperText="Please select level priority for the task"
        >
          {priority.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
        <Button
          type="submit"  
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<Add/>}
        >
          Add Task
        </Button>
      </div>
    </form>
  );
};
