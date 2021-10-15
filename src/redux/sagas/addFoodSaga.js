import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';


function* postFood(action){
    try{
        yield axios.post('/api/foods', action.payload )
        yield put({type: 'FETCH_FOOD'})
    }catch(error){
            console.log('Error selecting food', error )
        }
}

function* addFoodSaga(){
    yield takeLatest('ADD_NEW_FOOD', postFood)
}




export default addFoodSaga;