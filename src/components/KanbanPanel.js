import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { ToDoPanel } from './ToDoPanel';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding:'20px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    elevetion:'3',
    color: theme.palette.primary
  },

}));

export const KanbanPanel = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper} elevation={3} >
            Create Task
            <ToDoPanel/>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>In Progress</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Done</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
