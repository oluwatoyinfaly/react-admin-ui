import { useState } from 'react'
import './products.scss'
import DataTable from '../../components/dataTables/DataTable'
import Add from '../../components/add/Add'

const image = '/noavatar.png'

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'img',
    headerName: 'Image',
    width: 150,
    renderCell: (params: any) => (
      <img src={params.row.img || '/noavatar.png'} alt='avatar' />
    ),
  },
  {
    field: 'name',
    headerName: 'Product',
    width: 150,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 150,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 150,
  },
  {
    field: 'createdAt',
    headerName: 'Created at',
    width: 150,
  },
  {
    field: 'updatedAt',
    headerName: 'Updated at',
    width: 150,
  },
]

const productsRows = [
  { id: 1, img: image, name: 'Apple', description: 'Apple description', price: 5000, createdAt: '2021-09-01', updatedAt: '2021-09-01' },
  { id: 2, img: image, name: 'Banana', description: 'Banana description', price: 3000, createdAt: '2021-09-01', updatedAt: '2021-09-01' },
  { id: 3, img: image, name: 'Orange', description: 'Orange description', price: 4000, createdAt: '2021-09-01', updatedAt: '2021-09-01' },
  { id: 4, img: image, name: 'Pineapple', description: 'Pineapple description', price: 6000, createdAt: '2021-09-01', updatedAt: '2021-09-01' },
  { id: 5, img: image, name: 'Mango', description: 'Mango description', price: 7000, createdAt: '2021-09-01', updatedAt: '2021-09-01' },
  { id: 6, img: image, name: 'Grapes', description: 'Grapes description', price: 8000, createdAt: '2021-09-01', updatedAt: '2021-09-01' },
  { id: 7, img: image, name: 'Strawberry', description: 'Strawberry description', price: 9000, createdAt: '2021-09-01', updatedAt: '2021-09-01' },
  { id: 8, img: image, name: 'Watermelon', description: 'Watermelon description', price: 10000, createdAt: '2021-09-01', updatedAt: '2021-09-01' },
  { id: 9, img: image, name: 'Papaya', description: 'Papaya description', price: 11000, createdAt: '2021-09-01', updatedAt: '2021-09-01' },
  { id: 10, img: image, name: 'Peach', description: 'Peach description', price: 12000, createdAt: '2021-09-01', updatedAt: '2021-09-01' },
  { id: 11, img: image, name: 'Pear', description: 'Pear description', price: 13000, createdAt: '2021-09-01', updatedAt: '2021-09-01' },
  { id: 12, img: image, name: 'Cherry', description: 'Cherry description', price: 14000, createdAt: '2021-09-01', updatedAt: '2021-09-01' },
  { id: 13, img: image, name: 'Kiwi', description: 'Kiwi description', price: 15000, createdAt: '2021-09-01', updatedAt: '2021-09-01' },
  { id: 14, img: image, name: 'Lemon', description: 'Lemon description', price: 16000, createdAt: '2021-09-01', updatedAt: '2021-09-01' },
  { id: 15, img: image, name: 'Avocado', description: 'Avocado description', price: 17000, createdAt: '2021-09-01', updatedAt: '2021-09-01' },
  { id: 16, img: image, name: 'Pomegranate', description: 'Pomegranate description', price: 18000, createdAt: '2021-09-01', updatedAt: '2021-09-01' },
  { id: 17, img: image, name: 'Coconut', description: 'Coconut description', price: 19000, createdAt: '2021-09-01', updatedAt: '2021-09-01' },
  { id: 18, img: image, name: 'Pineapple', description: 'Pineapple description', price: 20000, createdAt: '2021-09-01', updatedAt: '2021-09-01' },
  { id: 19, img: image, name: 'Mango', description: 'Mango description', price: 21000, createdAt: '2021-09-01', updatedAt: '2021-09-01' },
  { id: 20, img: image, name: 'Grapes', description: 'Grapes description', price: 22000, createdAt: '2021-09-01', updatedAt: '2021-09-01' },
  { id: 21, img: image, name: 'Strawberry', description: 'Strawberry description', price: 23000, createdAt: '2021-09-01', updatedAt: '2021-09-01' },
]

const products = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={()=>setOpen(true)}>Add New Product</button>
      </div>
      <DataTable slug="products" columns={columns} rows={productsRows}  />
      {open && <Add setOpen={setOpen} slug='product' columns={columns} />}
    </div>
  )
}

export default products