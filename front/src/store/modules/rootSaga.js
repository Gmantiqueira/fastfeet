import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import delivery from './delivery/sagas';
import deliveryman from './deliveryman/sagas';
import problem from './problem/sagas';
import recipient from './recipient/sagas';

export default function* rootSaga() {
    return yield all([auth, delivery, deliveryman, problem, recipient]);
}
