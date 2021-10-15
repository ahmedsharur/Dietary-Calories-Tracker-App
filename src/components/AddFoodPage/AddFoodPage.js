// import React from "react";
// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";

// function AddFoodPage() {

// // set selector
// const reduxStore = useSelector((store) => store);
// const [foodName, setFoodName] 
// = useState({food_name: '', carbs: '', sugar: '', fat: '', protein: '' })
// const dispatch = useDispatch();


// const history = useHistory();



//   //function to handleAddFood
//   const handleAddFood = (event) => {
//     event.preventDefault();
//     dispatch({ type: "ADD_NEW_FOOD", payload: foodName });
//     setFoodName({ food_name: '', carbs: '', sugar: '', fat: '', protein: ''});
//     history.push("/foodList");
//   };


//   return (
//     <form>
//     <input type="text" placeholder="Food_Name" value={foodName.food_name}
//         onChange={(event) => setFoodName({...foodName, food_name: event.target.value})} />
//     <input type="text" placeholder="Carbs" value={foodName.carbs}
//         onChange={(event) => setFoodName({...foodName, carbs: event.target.value})} />
//     <input type="text" placeholder="Sugar" value={foodName.sugar}
//         onChange={(event) => setFoodName({...foodName, sugar: event.target.value})} />
//     <input type="text" placeholder="Fats" value={foodName.fat}
//         onChange={(event) => setFoodName({...foodName, fat: event.target.value})} />
//     <input type="text" placeholder="Proteins" value={foodName.protein}
//         onChange={(event) => setFoodName({...foodName, protein: event.target.value})} />
//       <button type="submit" variant="contained"color="secondary" onClick={handleAddFood}> Add </button>
//     </form>
//   );
// }

// export default AddFoodPage;
