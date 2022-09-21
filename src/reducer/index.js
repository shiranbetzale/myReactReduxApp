import nameOfImageReducer from "./nameOfImage";
import dogDataReducer from "./dogData";
import subDogDataReducer from "./subDogData";

import { combineReducers } from "redux";


const allReducers= combineReducers({
    nameOfImage : nameOfImageReducer,
    dogsData: dogDataReducer,
    subDogData: subDogDataReducer
})

export default allReducers;