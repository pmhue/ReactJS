import React from 'react'

const Render_Condition = () => {

    //khai bao hàm renderLogin
    const renderLogin = () => {
        if(isLogin == true){
            return <h3>Hello Hue</h3>
        }else{
            return <button className='btn btn-dark'>Login</button>
        }
    }


    //khai bao bien
    const isLogin = true; //true: đã đăng nhập, false: chưa đăng nhập

    return (
        <div className='header bg-dark text-white py-3'>
            <div className='d-flex justify-content-between'>
                <nav className='menu w-75 d-flex gap-3 align-items-center'>
                    <a className='logo text-decoration-none fs-3 text-white'>Cybersoft</a>
                    <a className='home text-decoration-none text-white'>Home</a>
                    <a className='about text-decoration-none text-white'>About</a>
                </nav>
                <div className='login w-25 text-end'>
                    {/* <button className='btn btn-dark'>Login</button> */}
                    {/* {isLogin == true ? <h3>Hello Hue</h3>: <button className='btn btn-dark'>Login</button>} */}
                    
                    {/* dùng hàm renderLogin để hiển thị login hoặc logout */}
                    {renderLogin()}
                </div>
            </div>

        </div>
    )
}

export default Render_Condition