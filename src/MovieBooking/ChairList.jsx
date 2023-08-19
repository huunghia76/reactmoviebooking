import React from 'react'
import Chair from './Chair';
import  cn  from 'classnames';

const ChairList = ({chairList}) => {
    console.log("chairList: ", chairList);
  return (
    <div className='mt-5'>
        {chairList.map((hangGhe) => (
            <div key={hangGhe.hang}
                className='d-flex justify-content-center gap-2 mb-2 '>
               <div className='p-3 fw-bold HangGhe' style={{width:'50px', height:'50px'}}>{hangGhe.hang}</div> 

                {hangGhe.danhSachGhe.map((ghe)=>(
                    <Chair className={cn({
                                disabled: !hangGhe.hang
                            })} key={ghe.soGhe} ghe={ghe} />
                    
                ))}
            </div>
        ))}
    </div>
  )
}

export default ChairList