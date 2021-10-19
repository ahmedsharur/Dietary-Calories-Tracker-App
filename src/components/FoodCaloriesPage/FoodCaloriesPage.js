import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { useHistory, useParams } from 'react-router-dom';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

//Material-ui
import {Button, TextField, Paper, makeStyles} from '@material-ui/core'

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


const totals = () => {

let sugars = 0;
setFoodList.map((meal) => {
  sugars+=meal.sugar
}
  
)
return <p> {sugars}</p>


}

// const totals = () =>  setFoodList.map((meal,index) => {
//    return meal[index].carbs, meal.sugar, meal.fat, meal.protein
// }).reduce((acc, curr) => {
//     console.log('This is current total', curr)
//     return acc + curr
//   },0)
  
//   totals();


//  const total= ()=> setFoodList.map((acc,curr,index) =>{
//   console.log("the totals are", acc)
//   console.log('the values are', curr)
//   console.log("the index is", index)
//   return  acc + curr.carbs
// })

// total();

  return (
    <>
    {id === 'a' ? <></> : setFoodList.length === 0 ? <></> : 
      <>
    <div className="container">
      
      <h2>Food Calories Page</h2>
      <div>
        Date:<DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)}/>
    </div>
      <center>
      <h3> Total Calories for Today:</h3>

        {totals()}


  {setFoodList.map((calorie) => 
     <p> {calorie.food_name}(Carbs:{calorie.carbs}g, 
    Sugar:{calorie.sugar}g,
    Fat:{calorie.fat}g, 
    Protein:{calorie.protein}g)</p>
  )}

    {/* {setFoodList[id].carbs}
      {setFoodList[id].sugar}
      {setFoodList[id].fat}
      {setFoodList[id].protein} */}
      {/* <br/> */}
      Food: {setFoodList[id].food_name} 
      <br/>
        <Button
          type="submit"
          variant="contained"color="secondary"
          onClick={(handleCaloriesPage) => {
            history.push('/foodList');
          }}
        >
          SELECT FOOD
        </Button>
      </center>
      {/* {JSON.stringify(setFoodList)} */}
    </div>

    </>
    }
    </>
  );
}

export default FoodCaloriesPage;
