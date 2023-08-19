import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    chairBookings: [],
    chairBookeds: [],
}
const baiTapMoiveBookingSlice = createSlice({
    name:'baiTapMovieBooking',
    initialState,
    reducers:{
        //actions
        setChairBookings:(state,action)=>{
            console.log("action: ", action);
            const index = state.chairBookings.findIndex((item)=>
                item.soGhe === action.payload.soGhe
            )
            if (index!== -1) {
                state.chairBookings.splice(index,1)
            }else{
                state.chairBookings.push(action.payload)
            }
            
        },
        setChairBooked:(state,{payload})=>{
            state.chairBookeds = [...state.chairBookeds, ...state.chairBookings]
            state.chairBookings = []
        }
    },
    extraReducers:()=>{ }//xử lý bất đồng bộ(call API)
})

export const {reducer:baiTapMovieBookingReducer, actions:baiTapMovieBookingAction } = baiTapMoiveBookingSlice