import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

function* selectFood(){
    try{
        yield axios.get('/api/foods/select')
        yield put({type: 'FETCH_FOOD'})
    }catch(error){
            console.log('Error selecting food', error )
        }
}


function* selectFoodSaga(){
    yield takeLatest('SELECT_NEW_FOOD', selectFood)
}


export default selectFoodSaga;