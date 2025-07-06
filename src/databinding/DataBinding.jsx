import React from 'react'

const DataBinding = () => {
    //Khai bao bien
    const name = 'Phan Minh Hue - AI Engineer'


    //Khai bao bien
    const product = {
        id: 1,
        name: 'iPhone 15 Pro Max',
        price: 1000,
        img: 'https://picsum.photos/200/200'
    }
    //Khai bao ham renderProduct
    const renderProduct = () => {
        return (
            <div>
                <h3>{product.name}</h3>
                <img src={product.img} alt={product.name} />
                <p>{product.price}$</p>
            </div>
        )
    }

    return (
        <div>
            <h1 className='text-center text-red-500'>Databinding Example</h1>
            <h2 className='text-center text-blue-500'>{name}</h2>

            {/* dùng để hiển thị dữ liệu từ component con sang component cha
             canh chỉnh đưa hinh vào theo chiều ngang dung d-flex justify-content-center
             */}
            <div className='text-center text-green-500 mt-5 d-flex justify-content-center'>
                {renderProduct()}
            </div>
        </div>

    )
}

export default DataBinding