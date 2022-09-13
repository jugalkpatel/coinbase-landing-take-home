// import axios from "axios";
import { createAction } from "@reduxjs/toolkit";
import { take, call, put, select, takeEvery } from "redux-saga/effects";
import fetchData from "../../api";
import { selectId } from "./dataSlice";

export const setData = createAction("app/data");
export const setError = createAction("app/error");

function* stateChange() {
  try {
    const offset = yield select(selectId);
    const data = yield call(fetchData, 50, offset);
    yield put(setData(data));
  } catch (error) {
    yield put(setError());
  }
}

export function* root() {
  yield take("app/loading");
  yield call(stateChange);
  yield takeEvery("app/loadMore", stateChange);
}

// app flow
// idle -> loading -> fetch data -> set data & current data -> load more -> again idle -> ....
// in fetch check if there are more items available or not
