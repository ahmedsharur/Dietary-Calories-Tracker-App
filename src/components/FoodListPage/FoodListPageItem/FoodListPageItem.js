// import {useDispatch} from 'react-redux'
// import { useHistory } from 'react-router';
// import {Button, TextField, Paper, makeStyles} from '@material-ui/core'


// function FoodListPageItem({food, index}){

//     const dispatch = useDispatch()
//     const history = useHistory();
//   //function to handlePOSTFood
//   const handlePostFood = (index) => (event) => {
//     console.log("index", index)
//     history.push(`/calories/${index}`);
//   };

//     const handleDelete = (id) => {
//         dispatch({ type: 'DELETE_FOOD', payload: id});
//       }
    
//     const handleEdit = (id) =>{
//         history.push(`/editFood/${id}`)
//     }
    
//     return (
//         <table className="simpleTable">
//         <thead>
//           <tr>
//             {/* <th>Food_Name</th> */}
//           </tr>
//         </thead>
//         <tbody>
//             <tr>
//             <td>{food.food_name}</td>
//               <td>
//                 {/* build 'Add' for POST route */}
//                   <Button onClick={handlePostFood(index)} 
//                   type="submit" variant="contained" color="default">SELECT </Button>
//               </td>
//               <td>
//                 <Button type="edit" variant="contained"color="primary"
//                 onClick={() => handleEdit(food.id)}>EDIT</Button>
//               </td>
//               <td>
//                 <Button type="delete" variant="contained" color="secondary"
//                 onClick={() => handleDelete(food.id)}>DELETE </Button>
//               </td>
//             </tr>
//             </tbody>
//       </table>
//     )
// }



// export default FoodListPageItem