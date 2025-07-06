//Đây là cấu trúc của một component react, cú pháp tạo component:
//gõ phím rafce để tạo component

import React from 'react'

const CardProduct = () => {//CardProduct là tên component
  return (//Nội dung duoc viết trong return: nhớ nội dung phải duoc viết trong một thẻ bao phủ
    <div className='card'>
        <img src="https://dummyimage.com/600x400/000/fff&text=CardProduct" alt="" />
        <div className='card-body'>
            <h3 className='card-title'>Card title name product</h3>
            <p className='card-text'>Card text</p>
            <p className='card-text'>Price: 100000</p>
            <a href="#" className='btn btn-primary'>Go somewhere</a>
            <button className='btn btn-success'>Add to cart</button>
        </div>
        
    </div>
  )
}

export default CardProduct