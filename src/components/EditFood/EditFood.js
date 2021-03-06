import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

//Material-ui
import {
  Button, Grid, Container, TextField, Paper, makeStyles,
} from "@material-ui/core";

// Styling
const useStyles = makeStyles({
  root: {
    //display: 'flex',
    marginLeft: "2px",
    display: "inline-block",
    float: "left",
  },
});

function EditFoodPage() {
  const classes = useStyles();
  // set selector
  const reduxStore = useSelector((store) => store);
  const [foodName, setFoodName] = useState({
    food_name: "", user_id: "", carbs: "", sugar: "", fat: "", protein: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const { id } = useParams();

  //function to handleEditFood
  const handleEditFood = (event) => {
    event.preventDefault();
    dispatch({ type: "EDIT_FOOD", payload: foodName, id: id });
    history.push("/foodList");
  };
  // setFoodName({ food_name: '', user_id: '', carbs: '', sugar: '',
  // fat: '', protein: ''});
  // console.log(foodName)
  // history.push("/foodList");

  return (
    <div>
      <h3> Edit Food Page</h3>
      <Container container spacing={3}>
        <Paper elevation={15}>
          <Grid>
            <Grid item xs="4">
              <TextField
                className={classes.root} type="text" variant="filled" color="success"
                focused size="small" placeholder="Food_Name"value={foodName.food_name}
                onChange={(event) =>
                  setFoodName({ ...foodName, food_name: event.target.value })
                }
              />
            </Grid>
            <Grid item xs="4">
              <TextField
                className={classes.root}
                type="text"
                variant="filled"
                color="success"
                focused
                size="small"
                placeholder="user_id"
                value={foodName.user_id}
                onChange={(event) =>
                  setFoodName({ ...foodName, user_id: event.target.value })
                }
              />
            </Grid>
            <Grid item xs="4">
              <TextField
                className={classes.root}
                type="text"
                variant="filled"
                color="success"
                focused
                size="small"
                placeholder="Carbs"
                value={foodName.carbs}
                onChange={(event) =>
                  setFoodName({ ...foodName, carbs: event.target.value })
                }
              />
            </Grid>
            <Grid item xs="4">
              <TextField
                className={classes.root}
                type="text"
                variant="filled"
                color="success"
                focused
                size="small"
                placeholder="Sugar"
                value={foodName.sugar}
                onChange={(event) =>
                  setFoodName({ ...foodName, sugar: event.target.value })
                }
              />
            </Grid>
            <Grid item xs="4">
              <TextField
                className={classes.root} type="text" variant="filled" color="success"
                focused size="small" placeholder="Fats" value={foodName.fat}
                onChange={(event) =>
                  setFoodName({ ...foodName, fat: event.target.value })
                }
              />
            </Grid>
            <Grid item xs="4">
              <TextField
                className={classes.root} type="text" variant="filled" color="success"
                focused size="small" placeholder="Proteins" value={foodName.protein}
                onChange={(event) =>
                  setFoodName({ ...foodName, protein: event.target.value })
                }
              />
            </Grid>
            <Button
              className={classes.root} type="submit" variant="contained" color="secondary"
              onClick={handleEditFood}
            >
              Add
            </Button>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}

export default EditFoodPage;
