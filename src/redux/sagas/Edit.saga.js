import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';


function* editFood(action){
    try{
        console.log("food to edit is: ", action.payload);
        console.log('id is', action.id)
        yield axios.put(`/api/foods/${action.id}`, {data: action.payload});
        yield put({type: 'FETCH_FOOD'});
    }catch(error){
        console.log('ERROR IN EDIT FOOD SAGA', error)
    }
}


function* editSaga(){
    yield takeLatest('EDIT_FOOD', editFood)
}


export default editSaga