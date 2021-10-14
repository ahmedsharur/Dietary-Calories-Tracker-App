import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function FoodListPage() {
  // set selector
  const reduxStore = useSelector((store) => store);
  const { setFoodList } = reduxStore;
  const dispatch = useDispatch();

  const history = useHistory();

  //state var to hold newFood details
  const [selectFood, setSelectFood] = useState({ food_name: selectFood });

  //function to handlePOSTFood
  const handlePostFood = (food) => (event) => {

    dispatch({ type: "SELECT_NEW_FOOD", payload: food });
    setSelectFood({ food_name: selectFood });
    history.push("/calories");
  };

  const backToFoodCalories = () => {
    history.push('/calories')
  }

  const goToAddFoodPage = () => {
      history.push('/addFood')
  }

  useEffect(() => {
    dispatch({ type: "FETCH_FOOD" });
  }, [dispatch]);

  return (
    <div className="food">
      <h2>Food List</h2>
      <p> All of the available foods can be seen here</p>
      {/* map over food from GET */}
      {/* <p>{JSON.stringify(setShelf)}</p> */}
      <table className="simpleTable">
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
              <td>
                {/* build 'Add' for POST route */}
                  <button onClick={handlePostFood(food)} 
                  type="submit">SELECT </button>
              </td>
              <td>
                <button type="edit">EDIT</button>
              </td>
              <td>
                <button type="delete">DELETE </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={backToFoodCalories}> Back </button>
      <button onClick={goToAddFoodPage}> Add New Food</button>
    </div>
  );
}

export default FoodListPage;
