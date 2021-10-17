import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

function EditFoodPage() {

// set selector
const reduxStore = useSelector((store) => store);
const [foodName, setFoodName] 
= useState({food_name: '', user_id: '', carbs: '', sugar: '', fat: '', protein: '' })
const dispatch = useDispatch();
const history = useHistory();

const {id} = useParams();
  
  //function to handleEditFood
  const handleEditFood = (event) => {
    event.preventDefault();
    dispatch({type: 'EDIT_FOOD', payload: foodName, id: id });
    };
    // setFoodName({ food_name: '', user_id: '', carbs: '', sugar: '', 
    // fat: '', protein: ''});
    // console.log(foodName)
    //history.push("/foodList");

   

  return (
      <div>
        <h3 > Edit Food Page</h3>
    <form>
    <input type="text" placeholder="Food_Name" value={foodName.food_name}
        onChange={(event) => setFoodName({...foodName, food_name: event.target.value})} />
        <input type="text" placeholder="user_id" value={foodName.user_id}
        onChange={(event) => setFoodName({...foodName, user_id: event.target.value})} />
    <input type="text" placeholder="Carbs" value={foodName.carbs}
        onChange={(event) => setFoodName({...foodName, carbs: event.target.value})} />
    <input type="text" placeholder="Sugar" value={foodName.sugar}
        onChange={(event) => setFoodName({...foodName, sugar: event.target.value})} />
    <input type="text" placeholder="Fats" value={foodName.fat}
        onChange={(event) => setFoodName({...foodName, fat: event.target.value})} />
    <input type="text" placeholder="Proteins" value={foodName.protein}
        onChange={(event) => setFoodName({...foodName, protein: event.target.value})} />
      <button type="submit" variant="contained"color="secondary" 
       onClick={handleEditFood}> Add </button>
    </form>
    </div>
  );
}

export default EditFoodPage;
