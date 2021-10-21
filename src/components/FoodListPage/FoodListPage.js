import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Paper, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";

function FoodListPage() {
  // set selector
  const reduxStore = useSelector((store) => store);
  const { setFoodList } = reduxStore;
  const dispatch = useDispatch();

  const history = useHistory();

  //state var to hold newFood details
  const [selectFood, setSelectFood] = useState({ food_name: selectFood });

  //function to handlePOSTFood
  const handlePostFood = (index) => (event) => {
    console.log("index", index);
    history.push(`/calories/${index}`);
  };

  // Styling
const tableStyles = makeStyles({
  tableHead: {
    fontWeight: 'bold',
  }
});

  const classes = tableStyles();

  const backToFoodCalories = () => {
    history.push("/calories/a");
  };

  const goToAddFoodPage = () => {
    history.push("/addFood");
  };

  useEffect(() => {
    dispatch({ type: "FETCH_FOOD" });
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_FOOD", payload: id });
  };

  const handleEdit = (id) => {
    history.push(`/editFood/${id}`);
  };



  return (
    <Paper elevation={15}>
      <div className="food">
        <h2>Food List</h2>
        <p> All of the available foods can be seen here</p>
        {/* map over food from GET */}

        <TableContainer component={Paper}>
          <Table sx={{ width: '20%' }} aria-label="simple table">
            <TableHead className={classes.tableStyles}>
              <TableRow>
                <TableCell>FOOD</TableCell>
                <TableCell>SELECT FOOD</TableCell>
                <TableCell>EDIT FOOD</TableCell>
                <TableCell>DELETE FOOD</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {setFoodList.map((food, index) => (
                <TableRow key={index}>
                  <TableCell>{food.food_name}</TableCell>
                  <TableCell>
                    {/* build 'Add' for POST route */}
                    <Button
                      onClick={handlePostFood(index)}
                      type="submit"
                      variant="contained"
                      color="default"
                    >
                      SELECT
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      type="edit"
                      variant="contained"
                      color="primary"
                      onClick={() => handleEdit(food.id)}
                    >
                      EDIT
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      type="delete"
                      variant="contained"
                      color="secondary"
                      onClick={() => handleDelete(food.id)}
                    >
                      DELETE{" "}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button
          type="back"
          variant="contained"
          color="default"
          onClick={backToFoodCalories}
        >
          {" "}
          Back{" "}
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={goToAddFoodPage}
        >
          {" "}
          Add New Food
        </Button>
      </div>
    </Paper>
  );
}

export default FoodListPage;
