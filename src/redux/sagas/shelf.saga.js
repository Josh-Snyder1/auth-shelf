import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchShelf() {
 try {
    const res = yield axios.get('/api/shelf');
    yield put({ type: 'SET_SHELF', payload: res.data})
 }   
 catch (err) {
    console.error('error is', err)
 }
}

function* addItem(action) {
   try {
      const res = yield axios.post('/api/shelf', action.payload);
      yield put({ type: 'SET_SHELF', payload: res.data})
   }   
   catch (err) {
      console.error('error is', err)
   }
  }

function* fetchSaga() {
    yield takeLatest('FETCH_SHELF', fetchShelf);
    yield takeLatest('ADD_ITEM', addItem);
  }
  
  export default fetchSaga;