import React from 'react'
import chairList from './data.json'
import ChairList from './ChairList';
import Result from './Result';
import './style.scss'
const MovieBooking = () => {
  return (
    <div className="container MovieBooking" >
        <h1 className='text-center fw-bold text-warning'>
            Đặt vé xem phim     
        </h1>
        <div className="row">
            <div className="col col-lg-8">
                <p className='text-center fw-bold text-white'>Màn hình</p>
                <div className='Manhinh' ></div>
                <ChairList chairList={chairList}></ChairList>
            </div>
            <div className="col col-lg-4">
                <Result></Result>
            </div>
        </div>
    </div>
  )
}

export default MovieBooking