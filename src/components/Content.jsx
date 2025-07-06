import React from 'react'
import CardProduct from './CardProduct'

const Content = () => {
  return (
    <div className='bg-success text-dark text-center p-5 display-4'>
        <div className='row'>
            <div className='col-4'>
                <CardProduct></CardProduct>
            </div>
            <div className='col-4'>
                <CardProduct></CardProduct>
            </div>
            <div className='col-4'>
                <CardProduct></CardProduct>
            </div>
        </div>
    </div>
  )
}

export default Content