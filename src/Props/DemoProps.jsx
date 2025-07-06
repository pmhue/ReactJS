import React from 'react'
import ChildComponent from './ChildComponent'
import CardComponent from './CardComponent'

const DemoProps = (props) => {
    let sp1 = {
        id:1,
        name:'iphone',
        price: 1000,
        img : 'https://dummyimage.com/600x400/000/fff?text=iphone'
    }
    let sp2 = {
        id:2,
        name:'iphone19',
        price: 2000,
        img : 'https://dummyimage.com/600x400/000/fff?text=iphone19'
    }
    return (
        <div className='container'>
            <h3>Props (properties component)</h3>
            <ChildComponent noiDung="tiêu đề 1" />
            <ChildComponent noiDung="tiêu đề 2" />
            <ChildComponent noiDung="tiêu đề 3" />
            <div className='row'>
                <div className='col-3'>
                    <CardComponent product={sp1} />
                </div>
                <div className='col-3'>
                    <CardComponent product={sp2}/>
                </div>
            </div>
        </div>
    )
}

export default DemoProps