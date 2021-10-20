import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';


function* getDate(){
    try{
        yield axios.get('/api/foods/select')
        yield put({type: 'FETCH_FOOD'})
    }catch(error){
            console.log('Error selecting date', error )
        }
}

function* dateSaga(){
    yield takeLatest('GET_DATE', getDate)
}




export default dateSaga;