import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import fetchFoodSaga from './fetchFood.saga';
import selectFoodSaga from './selectFood.saga';
import addFoodSaga from './addFoodSaga';
import deleteSaga from './delete.saga';
import editSaga from './Edit.saga';
import dateSaga from './date.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    fetchFoodSaga(),
    selectFoodSaga(),
    addFoodSaga(),
    deleteSaga(),
    editSaga(),
    dateSaga(),
  ]);
}
