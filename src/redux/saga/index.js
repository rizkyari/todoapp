import {takeLatest, put, call, all} from "redux-saga/effects";
import{getDataError, getDataSuccess} from "../actions/action";
import request from "../../helpers/request/request";

export function* getFirstTime(){
    const url = `https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list`;
    const config = {
        method: "get",
        headers: {
            "Accept": "application/json",
        },
    };
    try {
        const result = yield call(request, url, config);
        yield put(getDataSuccess(result));
    } catch(error){
        put(getDataError(error));
    }
}

export default function* rootSaga(){
    yield all([
        takeLatest("GET_DATA", getFirstTime)
    ]);
}

