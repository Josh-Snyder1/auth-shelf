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
      yield axios.post('/api/shelf', action.payload);
      yield put({ type: 'FETCH_SHELF'})
   }   
   catch (err) {
      console.error('error is', err)
   }
  }

  function* deleteItem(action) {
    console.log('item id to delte is', action.payload.item.id)
    console.log('payload is ', action.payload)
    try {
       yield axios.delete(`/api/shelf/${action.payload.item.id}`);
       yield put({ type: 'FETCH_SHELF'})
    }   
    catch (err) {
       console.error('error is', err)
    }
   }

function* fetchSaga() {
    yield takeLatest('FETCH_SHELF', fetchShelf);
    yield takeLatest('ADD_ITEM', addItem);
    yield takeLatest('DELETE_ITEM', deleteItem);
  }
  
  export default fetchSaga;