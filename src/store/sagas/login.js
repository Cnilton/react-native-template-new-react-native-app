import { put, call } from "redux-saga/effects";
import api from "../../services/api";
import LoginActions from "../ducks/login";
import LoadingActions from "../ducks/loading";
import ErrorActions from "../ducks/error";
import { navigate } from "../../services/navigation";

import AsyncStorage from "@react-native-community/async-storage";

export function* login(action) {
  try {
    yield put(LoadingActions.showLoading());
    const { params, remember } = action;

    var bodyFormData = new FormData();
    bodyFormData.append("login", "mobile");
    bodyFormData.append("usuario", params.user);
    bodyFormData.append("senha", params.password);

    const response = yield call(api.post, "login/enviar/", bodyFormData);
    if (response.data.status) {
      if (remember) {
        yield AsyncStorage.setItem("user", params.user);
        yield AsyncStorage.setItem("password", params.password);
      }
      console.log(response.data);
      yield AsyncStorage.setItem("remember", remember.toString());
      yield put(LoadingActions.hideLoading());
      yield put(LoginActions.loginSuccess(response.data));
      navigate("Context");
    } else {
      yield put(LoadingActions.hideLoading());
      yield put(LoginActions.loginFailure());
      yield put(ErrorActions.showError(response.data.error));
    }
  } catch (err) {
    var errorMessage = "";
    if (err.response) {
      errorMessage = err.message;
    } else {
      errorMessage = "Verifique sua conexão com a internet";
    }
    yield put(LoadingActions.hideLoading());
    yield put(LoginActions.loginFailure());
    yield put(ErrorActions.showError(errorMessage));
  }
}
