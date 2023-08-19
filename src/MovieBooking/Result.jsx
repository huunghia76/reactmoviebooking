import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { baiTapMovieBookingAction } from '../store/baiTapMovieBooking/slice';
import './style.scss'
import swal from 'sweetalert';
const Result = () => {
    const dispatch = useDispatch();
    const { chairBookings } = useSelector((state) => state.baiTapMovieBookingReducer)//state tai store/index
    console.log("chairBookings: ", chairBookings);
   
    return (
        <div className='Result'>
            <h2 className="mt-5">Danh sách ghế bạn chọn</h2>
            <div>
                <div className="d-flex gap-3 mt-3">
                    <div className="Chair booked"></div>
                    <p>Ghế đã đặt</p>
                </div>
                <div className="d-flex gap-3 mt-3 ">
                    <div className="Chair booking" ></div>
                    <p>Ghế đang chon</p>
                </div>
                <div className="d-flex gap-3 mt-3">
                    <div className="Chair"></div>
                    <p>Ghế chưa đặt</p>
                </div>
            </div>

            <table border={1} className='table mt-3'>
                <thead>
                    <tr>
                        <th>Số ghế</th>
                        <th>Giá</th>
                        <th>Hủy</th>
                    </tr>
                </thead>
                <tbody>
                    {chairBookings.map((chair) => (
                        <tr key={chair.soGhe}>
                            <td>{chair.soGhe}</td>
                            <td>{chair.gia}</td>
                            <td className='text-danger fw-bold fs-3 cursor-pointer '
                                onClick={() => {
                                    dispatch(baiTapMovieBookingAction.setChairBookings(chair))
                                }
                                }
                            >X</td>
                        </tr>
                    ))}
                    <tr>
                        <td>Tổng tiền cần thanh toán</td>
                        <td>
                            {chairBookings.reduce((total, chair) => {
                                return (total += chair.gia)
                            }, 0)}
                            {/* 0 là giá trị mặc định của total, chair là item */}
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
                <button className='btn btn-primary'
                onClick={() => { 
                    chairBookings.length ?
                    swal({
                        title: 'Chúc mừng bạn đã đặt ghế thành công!',
                        icon: 'success'
                    }) 
                    : 
                    swal({
                        title: 'Vui lòng chọn ghế muốn đặt!',
                        icon: 'error'
                    }) 
                    dispatch(baiTapMovieBookingAction.setChairBooked()) 
                    }}
            >Thanh toán</button>
        </div>
    )
}

export default Result
