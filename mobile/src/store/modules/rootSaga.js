import {all} from 'redux-saga/effects';

import deliveryman from './deliveryman/sagas';
import dispatch from './dispatch/sagas';

export default function* rootSaga() {
  return yield all([deliveryman, dispatch]);
}
