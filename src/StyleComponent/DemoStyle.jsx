import React, { useState } from 'react'
import cssStyle from './DemoStyle.module.css';


const DemoStyle = () => {

    let [fSize,setFsize] = useState(30);
    const jsonCss = { color: 'red', backgroundColor: 'blue' };
    return (
        <div className='container'>
            <h3>Style component</h3>
            <p style={{
                color: '#fff',
                backgroundColor: 'blue',
                padding:'10px',
                borderRadius:'5px'
            }}>Lorem ipsum dolor sit amet.</p>
            <div style={jsonCss} />
            <p className={cssStyle.pBlue}>
                Lorem ipsum dolor sit amet.
            </p>
             <p className={`bg-dark ${cssStyle.pBlue}  ${cssStyle['border-red']}`}>
                Lorem ipsum dolor sit amet.
            </p>
            <hr />
            {/* dùng style để thay đổi font size của h3 cho bien fSize vào trong h3 */}
            <h3 style={{fontSize:`${fSize}px`}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illum sit ex eligendi enim tempore doloremque fugit dolores molestiae totam?</h3>
            <button className='btn btn-success' onClick={()=>{
                //fSize là biến state để lưu giá trị font size
                //setFsize là hàm setState để thay đổi giá trị của fSize
                setFsize(fSize+1); //tăng font size lên 1px
            }}>+</button>
            <button className='btn btn-primary mx-2' onClick={()=>{
                //setFsize là hàm setState để thay đổi giá trị của fSize
                //fSize là biến state để lưu giá trị font size
                setFsize(fSize-1); //giảm font size xuống 1px
            }}>-</button>
        </div>
    )
}

export default DemoStyle