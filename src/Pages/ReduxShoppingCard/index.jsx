import { Typography } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { Table } from 'antd'

import { useNavigate } from 'react-router-dom'


const ReduxShoppingCardPage = () => {

  const {carts} = useSelector((state) => state.product)
  const navigate = useNavigate()

  const columns = [
    {
      title: 'Tên sản phẩm',
      dataIndex: 'name'
    },
    {
      title: 'Giá',
      dataIndex: 'price'
    },
    {
      title: 'Mô tả',
      dataIndex: 'shortDescription',
      render: (value) => <Typography.Paragraph style={{width: 200, height: 100}}>{value}</Typography.Paragraph>
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'image',
      render: (value) => <img src= {value} style={{width: 100, height: 100}} />
    },
  
  ]

  return (
    <div className='container mt-5'>
      <Typography.Title>
        Thông tin sản phẩm trong giỏ hàng ({carts.length})

      </Typography.Title>
      {/* render danh sách sản phẩm trong giỏ hàng */}
      <Table dataSource={carts} columns={columns} onRow={(record) => ({
        onClick: () => navigate(`/redux-shopping-card/${record.id}`)
      })}/>

    </div>
  )
}

export default ReduxShoppingCardPage