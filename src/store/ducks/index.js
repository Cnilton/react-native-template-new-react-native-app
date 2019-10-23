import { combineReducers } from "redux";

import { reducer as error } from "./error";
import { reducer as login } from "./login";
import { reducer as loading } from "./loading";

export default combineReducers({ error, login, loading });
