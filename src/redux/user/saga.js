import { fetchLoginFail, fetchLoginSuccess, fetchRegisterFail, fetchRegisterSuccess } from "./action";
import { FETCH_LOGIN_REQUEST, FETCH_REGISTER_REQUEST } from "./type";
import { call, put, takeEvery } from 'redux-saga/effects'
import { loginApi } from "../../../API/user";
import { alertService } from "../../components/Alert/alert.service";

function* fetchLogin({ payload }) {
  try {
    const data = yield call(loginApi, payload); 
    yield put(fetchLoginSuccess(data.data));
    alertService.success("Đăng nhập thành công");
  } catch (e) {
    yield put(fetchLoginFail(e.response.data));
    alertService.error(e.response.data);
  }
}

const rootUserSaga = [
  takeEvery(FETCH_LOGIN_REQUEST, fetchLogin),
];

export default rootUserSaga;