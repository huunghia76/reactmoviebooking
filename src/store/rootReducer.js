import { combineReducers } from "redux";
import { baiTapMovieBookingReducer } from "./baiTapMovieBooking/slice";

export const rootReducer = combineReducers({
    baiTapMovieBookingReducer:baiTapMovieBookingReducer
})