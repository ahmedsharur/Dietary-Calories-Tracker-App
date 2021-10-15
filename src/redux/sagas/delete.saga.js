// import { put, takeLatest } from 'redux-saga/effects'
// import axios from 'axios';

// function* deleteFood(action) {
//     try {
//         console.log("Item to delete: ", action.payload);
//         yield axios.delete(`/api/foods/${action.payload}`);
//         yield put({ type: 'FETCH_FOOD' });
//     } catch (error) {
//         console.log('could not delete', error);
//     }
// }

// function* deleteSaga() {
//     yield takeLatest('DELETE_FOOD', deleteFood)
// }

// export default deleteSaga;