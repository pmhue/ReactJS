import React from 'react'
import HeaderReact from './HeaderReact'
import Navigation from './Navigation'
import Content from './Content'
import FooterCom from './FooterCom'

const BT1_HomeComponent = () => {
  return (
    <div>
        <HeaderReact></HeaderReact>
        {/* thiết kế chiều cao của navigation và content bằng nhau */}
        
        <div className='row mt-5 mb-5 d-flex align-items-center justify-content-center'>
            <div className='col-4 p-0 m-0'>
                <Navigation></Navigation>
            </div>
            <div className='col-8 p-0 m-0'>
                {/* dùng tailwind css thử vào content*/}
                <p className='text-red-500 text-bold'>Hello World</p>
                <Content></Content>
            </div>
            <div className='col-12'>
                <FooterCom></FooterCom>
            </div>
        </div>
    </div>
  )
}

export default BT1_HomeComponent