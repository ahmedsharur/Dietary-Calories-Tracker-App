import React from 'react'
import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
function FoodListPage(){
    // set selector 
    const reduxStore = useSelector (store => store)
    //const [foods, setFoods] = useSelector([])
    const {setFoodList} = reduxStore
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch({type: 'FETCH_FOOD'});
    }, [dispatch]);

    return (
        <div className="food">
            <h2>Food List</h2>
            <p> All of the available foods can be seen here</p>
             {/* map over food from GET */}
      {/* <p>{JSON.stringify(setShelf)}</p> */}
        <table className ="simpleTable">
            <thead> 
                <tr>
                <th>food_name</th>
                <th>user_id</th>
                <th>carbs</th>
                <th>sugar</th>
                <th>fat</th>
                <th>protein</th>
                <th>calorie_total</th>
               </tr>
            </thead>
            <tbody> 
            {setFoodList.map((food, index) => (
                  <tr key={index}>
                    <td>{food.food_name}</td>
                    <td>{food.user_id}</td>
                    <td>{food.carbs}</td>
                    <td>{food.sugar}</td>
                    <td>{food.fat}</td>
                    <td>{food.protein}</td>
                    <td>{food.calorie_total}</td>
                  </tr>
                ))}
            </tbody>
            </table>
        
       </div>
    )
}


export default FoodListPage;