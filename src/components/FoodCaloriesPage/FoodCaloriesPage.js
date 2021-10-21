import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//Material-ui
import { Button, TextField, Paper, makeStyles } from "@material-ui/core";

function FoodCaloriesPage() {
  const history = useHistory();
  const [selectedDate, setSelectedDate] = useState("");

  const reduxStore = useSelector((store) => store);
  const { setFoodList } = reduxStore;

  const dispatch = useDispatch();

  const { id } = useParams();
  console.log(setFoodList);
  console.log("IN FOOD CALORIES PAGE ID IS", id);
  const handleCaloriesPage = (event) => {
    event.preventDefault();
    console.log("add calories", calories);
    dispatch({
      type: "SET_CALORIES",
    });
  };

  const getDate = (event) => {
    event.preventDefault();
    dispatch({ type: "GET_DATE", payload: selectedDate });
    setSelectedDate(event.target.value);
  };

  const totalCarbs = () => {
    let carbs = 0;
    setFoodList.map((meal) => {
      carbs += meal.carbs;
    });
    return <p> Carbs:{carbs}g</p>;
  };

  const totalSugars = () => {
    let sugar = 0;
    setFoodList.map((meal) => {
      sugar += meal.sugar;
    });
    return <p>Sugar:{sugar}g </p>;
  };

  const totalFats = () => {
    let fat = 0;
    setFoodList.map((meal) => {
      fat += meal.fat;
    });
    return <p>Fats:{fat}g</p>;
  };

  const totalProteins = () => {
    let protein = 0;
    setFoodList.map((meal) => {
      protein += meal.protein;
    });
    return <p> Proteins:{protein}g</p>;
  };
  return (
    <>
      {id === "a" ? (
        <></>
      ) : setFoodList.length === 0 ? (
        <></>
      ) : (
        <>
          <div className="container">
            <h2>Food Calories Page</h2>
            <div>
              <form>
                <input
                  required
                  placeholder="date"
                  value={selectedDate}
                  type="date"
                  onChange={getDate}
                />
              </form>
              {selectedDate}
            </div>
            <center>
              <h3> Total Calories for Today:</h3>
              <div className="simpleTable">
                {totalCarbs()}
                {totalSugars()}
                {totalFats()}
                {totalProteins()}
              </div>
              <div className="simpleTable">
                Foods:
                {setFoodList.map((calorie) => (
                  <p>
                    {" "}
                    {calorie.food_name}(Carbs:{calorie.carbs}g, Sugar:
                    {calorie.sugar}g, Fat:{calorie.fat}g, Protein:
                    {calorie.protein}g)
                  </p>
                ))}
              </div>
              Food: {setFoodList[id].food_name}
              <br />
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                onClick={(handleCaloriesPage) => {
                  history.push("/foodList");
                }}
              >
                SELECT FOOD
              </Button>
            </center>
          </div>
        </>
      )}
    </>
  );
}

export default FoodCaloriesPage;
