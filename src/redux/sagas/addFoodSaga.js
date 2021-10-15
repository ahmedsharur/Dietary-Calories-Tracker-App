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

function* fetchFoodSaga(){
    yield takeLatest('FETCH_FOOD', fetchFood)
}




export default postFood;