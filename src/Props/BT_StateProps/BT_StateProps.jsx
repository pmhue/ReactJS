//rafce
import React, { useState } from 'react'
import { dataPhone } from '../../data/dataPhone'
import BT_SanPham from './BT_SanPham';
import BT_GioHang from './BT_GioHang';
const BT_StateProps = () => {
    const [productDetail,setProductDetail] = useState({ "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 270, "hinhAnh": "/img/applephone.jpg" });

    const [gioHang,setGioHang] = useState([ //111
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 270, "hinhAnh": "/img/applephone.jpg",soLuong: 10 }
    ]); 


    const renderProduct = () =>{
        let arrProductJSX = dataPhone.map((item,index)=>{
            return <div className='col-md-4 mt-2' key={index}>
                <BT_SanPham item={item} handleSetStateProduct={handleViewDetail} themGioHang={themGioHang}/>
            </div>
        });
        return arrProductJSX;
    }

    const handleViewDetail = (prodClick) =>{ //Click vào item nào thì set state lại product detail = item đó
        setProductDetail(prodClick);
    }

    const themGioHang = (spClick) => {
        //Tạo ra sản phẩm có số lượng
        const sanPhamGioHang = {...spClick,soLuong:1};
        //Clone giỏ hàng ra vùng nhớ mới
        let gioHangMoi = [...gioHang];
        //Kiểm tra sản phẩm được click có trong giỏ hàng chưa (nếu có thì tăng số lượng, chưa có thì thêm vào)
        let itemGioHang = gioHangMoi.find(sp => sp.maSP == spClick.maSP);
        if(itemGioHang){ //itemGioHang != undefined
            itemGioHang.soLuong += 1;
        }else {
            gioHangMoi.push(sanPhamGioHang);
        }


        //gọi hàm setState đưa vào giỏ hàng mới
        setGioHang(gioHangMoi);

    }


  return (
    <div className='container'>
        <h3>Bài tập state props</h3>
        <BT_GioHang gioHang={gioHang} />
        <div className='row'>
            {renderProduct()}
            
        </div>
        <div className='mt-2 row'>
            <div className='col-3'>
                <h3>Tên sản phẩm chi tiết</h3>
                <img src={productDetail.hinhAnh} height={250} style={{objectFit:'contain'}} alt='...' />
            </div>
            <div className='col-9'>
                <h3>Thông số kỹ thuật</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Màn hình</th>
                            <th>{productDetail.manHinh}</th>
                        </tr>
                        <tr>
                            <th>Hệ điều hành</th>
                            <th>{productDetail.heDieuHanh}</th>
                        </tr>
                        <tr>
                            <th>Camera trước</th>
                                     <th>{productDetail.cameraTruoc}</th>
                        </tr>
                        <tr>
                            <th>Camera sau</th>
                            <th>{productDetail.cameraSau}</th>
                        </tr>
                        <tr>
                            <th>Ram</th>
                            <th>{productDetail.ram}</th>
                        </tr>
                        <tr>
                             <th>Rom</th>
                            <th>{productDetail.rom}</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    </div>
  )
}

export default BT_StateProps