import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { useHistory, useParams } from 'react-router-dom';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
  

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function FoodCaloriesPage() {
  const history = useHistory();
  const [selectedDate, setSelectedDate] = useState(null)
  //const [calories, setCalories] = useState();

  const reduxStore = useSelector((store) => store);
  const { setFoodList } = reduxStore;


  const {id} = useParams();
  console.log(setFoodList)
  console.log("IN FOOD CALORIES PAGE ID IS", id)
  const handleCaloriesPage = (event) => {
  event.preventDefault();
  console.log("add calories", calories);
  dispatch({
    type: 'SET_CALORIES'
  });
} 

  return (
    <>
    {id === 'a' ? <></> : setFoodList.length === 0 ? <></> : 
      <>
    <div className="container">
      
      <h2>Food Calories Page</h2>
      <div>
        <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)}/>
    </div>
      <center>
      <h3> Total Calories for Today:</h3>

  {setFoodList.map((calorie) => {
    return <p> {calorie.food_name}Carbs:{calorie.carbs} 
    Sugar:{calorie.sugar} 
    Fat:{calorie.fat} 
    Protein:{calorie.protein}</p>
  })}

    {/* {setFoodList[id].carbs}
      {setFoodList[id].sugar}
      {setFoodList[id].fat}
      {setFoodList[id].protein} */}
      {/* <br/> */}
      Food: {setFoodList[id].food_name} 
      <br/>
        <button
          type="button"
          onClick={(handleCaloriesPage) => {
            history.push('/foodList');
          }}
        >
          SELECT FOOD
        </button>
      </center>
      {/* {JSON.stringify(setFoodList)} */}
    </div>

    </>
    }
    </>
  );
}

export default FoodCaloriesPage;
