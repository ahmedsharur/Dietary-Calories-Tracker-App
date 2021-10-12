import React from 'react'
import {useState, useEffect} from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
function FoodListPage(){
    // set selector 
    // const reduxStore = useSelector (store => store)
    // const dispatch = useState();

    // useEffect( () => {
    //     dispatch({
    //         type: 'FETCH_FOOD'
    //     }, []);
    // })
    return (
        <div className="food">
            <h2>Food List</h2>
            <p> </p>
       </div>
    )
}


export default FoodListPage;