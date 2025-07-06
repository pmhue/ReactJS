import React from 'react'

//khai báo hàm handleEvent
const handleEvent_ClickMe = (e) => {
    e.target.className='btn btn-danger'
    //hiện chúc mung sinh nhat
   document.querySelector('h1').innerHTML='Chúc mừng sinh nhật Phan Minh Hue'
}


const HandleEvent = () => {
  return (
    <div className='container'>
        <h1 className='text-center text-red-500'>HandleEvent</h1>
        <button className='btn btn-success' onClick={handleEvent_ClickMe}>Click me</button>
    </div>
  )
}

export default HandleEvent