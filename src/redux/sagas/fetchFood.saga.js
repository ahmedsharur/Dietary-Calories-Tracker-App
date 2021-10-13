import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


//food Saga: will be fired on 'FETCH_FOOD'

function* fetchFood(){
    try{
        const response = yield axios.get('/api/foods')
        console.log('this is FETCHFOOD response', response.data)
        yield put({type: 'SET_FOOD', payload: response.data})
    }catch(error){
        console.log('food get request failed', error)
    }
}



function* fetchFoodSaga(){
    yield takeLatest('FETCH_FOOD', fetchFood)
}


export default fetchFoodSaga;