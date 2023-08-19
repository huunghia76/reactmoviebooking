import cn from 'classnames'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { baiTapMovieBookingAction } from '../store/baiTapMovieBooking/slice'
import './style.scss'

const Chair = ({ ghe, className }) => {
    const { chairBookings, chairBookeds } = useSelector(state => state.baiTapMovieBookingReducer)//state tai store/index
    const dispatch = useDispatch();

    return <div className={cn('Chair d-grid justify-content-center align-items-center ', className, {
        booking: chairBookings.find((chair) => chair.soGhe === ghe.soGhe),
        booked: chairBookeds.find((chair) => chair.soGhe === ghe.soGhe)
    })} style={{ width: '50px', height: '50px' }}
        onClick={() => {
            dispatch(baiTapMovieBookingAction.setChairBookings(ghe))//tham số truyền vào chính là payload
        }}>
        {ghe.soGhe}
    </div>


}

export default Chair