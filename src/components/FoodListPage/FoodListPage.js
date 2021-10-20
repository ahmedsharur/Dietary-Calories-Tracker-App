import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {Button, TextField, Paper, makeStyles} from '@material-ui/core'


function FoodListPage() {
  // set selector
  const reduxStore = useSelector((store) => store);
  const { setFoodList } = reduxStore;
  const dispatch = useDispatch();
  //const [totalCalories, setTotalCalories] = useState(0)

  const history = useHistory();

  //state var to hold newFood details
  const [selectFood, setSelectFood] = useState({ food_name: selectFood});

  //function to handlePOSTFood
  const handlePostFood = (index) => (event) => {
    console.log("index", index)
    history.push(`/calories/${index}`);
  };

  const backToFoodCalories = () => {
    history.push('/calories/a')
  }

  const goToAddFoodPage = () => {
      history.push('/addFood')
  }

  useEffect(() => {
    dispatch({ type: "FETCH_FOOD" });
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_FOOD', payload: id});
  }

const handleEdit = (id) =>{
    history.push(`/editFood/${id}`)
}


  return (
    <Paper elevation={20}>
    <div className="food">
      <h2>Food List</h2>
      <p> All of the available foods can be seen here</p>
      {/* map over food from GET */}
      {/* <p>{JSON.stringify(setShelf)}</p> */}
      <table className="simpleTable">
        <thead>
          <tr>
            <th>Food_Name</th>
            {/* <th>user_id</th>
            <th>carbs</th>
            <th>sugar</th>
            <th>fat</th>
            <th>protein</th> */}
          </tr>
        </thead>
        <tbody>
          {setFoodList.map((food, index) => (
            <tr key={index}>
              <td>{food.food_name}</td>
              {/* <td>{food.user_id}</td>
              <td>{food.carbs}</td>
              <td>{food.sugar}</td>
              <td>{food.fat}</td>
              <td>{food.protein}</td> */}
              <td>
                {/* build 'Add' for POST route */}
                  <Button onClick={handlePostFood(index)} 
                  type="submit" variant="contained" color="default">SELECT </Button>
              </td>
              <td>
                <Button type="edit" variant="contained"color="primary"
                onClick={() => handleEdit(food.id)}>EDIT</Button>
              </td>
              <td>
                <Button type="delete" variant="contained" color="secondary"
                onClick={() => handleDelete(food.id)}>DELETE </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button type ="back" variant="contained" color="default"
      onClick={backToFoodCalories}> Back </Button>
      <Button type="submit" variant="contained" color="primary"
      onClick={goToAddFoodPage}> Add New Food</Button>
    </div>
    </Paper>
  );
}

export default FoodListPage;
