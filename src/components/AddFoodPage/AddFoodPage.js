import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {Button, Grid, TextField, Paper, makeStyles} from '@material-ui/core'

// Styling
const useStyles = makeStyles({
  root: {
    display: 'inline-block',
    float: 'left',
  },
});

function AddFoodPage() {
 
  const classes = useStyles();
// set selector
const reduxStore = useSelector((store) => store);
const [foodName, setFoodName] 
= useState({food_name: '', user_id: '', carbs: '', sugar: '', fat: '', protein: '' })
const dispatch = useDispatch();
const history = useHistory();

  //function to handleAddFood
  const handleAddFood = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_NEW_FOOD", payload: foodName });
    setFoodName({ food_name: '', user_id: '', carbs: '', sugar: '', fat: '', protein: ''});
    console.log(foodName)
    history.push("/foodList");
  };


  return (
      <div>
        <h3> Add Food Page</h3>
        <Paper elevation={15}>
        <Grid container spacing={2}>
    <form>
      <Grid item xs="8">
    <TextField className={classes.root} style={{ display: 'inline-flex' }} type="text" variant="filled" color="success" focused size="small" placeholder="Food_Name" value={foodName.food_name}
        onChange={(event) => setFoodName({...foodName, food_name: event.target.value})} />
      </Grid>
      <Grid item xs="8">
    <TextField className={classes.root} type="text" variant="filled" 
    color="success" focused size="small"  placeholder="user_id" value={foodName.user_id}
        onChange={(event) => setFoodName({...foodName, user_id: event.target.value})} />
      </Grid>
      <Grid item xs="8">
    <TextField type="text" variant="filled" color="success" focused size="small"  placeholder="Carbs" value={foodName.carbs}
        onChange={(event) => setFoodName({...foodName, carbs: event.target.value})} />
    </Grid>
    <Grid item xs="8">
    <TextField type="text" variant="filled" color="success" focused size="small" placeholder="Sugar" value={foodName.sugar}
        onChange={(event) => setFoodName({...foodName, sugar: event.target.value})} />
    </Grid>
    <Grid item xs="8">
    <TextField type="text" variant="filled" color="success" focused size="small" placeholder="Fats" value={foodName.fat}
        onChange={(event) => setFoodName({...foodName, fat: event.target.value})} />
    </Grid>
    <Grid item xs="8">
    <TextField type="text" variant="filled" color="success" focused size="small" placeholder="Proteins" value={foodName.protein}
        onChange={(event) => setFoodName({...foodName, protein: event.target.value})} />
      </Grid>
      <Button type="submit" variant="contained"color="secondary" onClick={handleAddFood}> Add </Button>
    </form>
    </Grid>
    </Paper>
    </div>
  );
}

export default AddFoodPage;
