import { useState } from 'react'
import Add from '../../components/add/Add'
import DataTable from '../../components/dataTables/DataTable'
import './categories.scss'

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
    headerName: 'Category',
    width: 150,
  },
  {
    field: 'description',
    headerName: 'Description',
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

// Groceries categories
const catRows = [
  { id: 1, name: 'Fruits', description: 'Fruits category', createdAt: '2021-09-01', updatedAt: '2021-09-01' },
  { id: 2, name: 'Vegetables', description: 'Vegetables category', createdAt: '2021-09-01', updatedAt: '2021-09-01' },
  { id: 3, name: 'Meat', description: 'Meat category', createdAt: '2021-09-01', updatedAt: '2021-09-01' },
  { id: 4, name: 'Fish', description: 'Fish category', createdAt: '2021-09-01', updatedAt: '2021-09-01' },
  { id: 5, name: 'Dairy', description: 'Dairy category', createdAt: '2021-09-01', updatedAt: '2021-09-01' },
  { id: 6, name: 'Bakery', description: 'Bakery category', createdAt: '2021-09-01', updatedAt: '2021-09-01' },
  { id: 7, name: 'Beverages', description: 'Beverages category', createdAt: '2021-09-01', updatedAt: '2021-09-01' },
  { id: 8, name: 'Alcohol', description: 'Alcohol category', createdAt: '2021-09-01', updatedAt: '2021-09-01' },
  { id: 9, name: 'Snacks', description: 'Snacks category', createdAt: '2021-09-01', updatedAt: '2021-09-01' },
  { id: 10, name: 'Canned', description: 'Canned category', createdAt: '2021-09-01', updatedAt: '2021-09-01' },
  { id: 11, name: 'Frozen', description: 'Frozen category', createdAt: '2021-09-01', updatedAt: '2021-09-01' },
  { id: 12, name: 'Pasta', description: 'Pasta category', createdAt: '2021-09-01', updatedAt: '2021-09-01' },
  { id: 13, name: 'Sauces', description: 'Sauces category', createdAt: '2021-09-01', updatedAt: '2021-09-01' },
]

const categories = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='categories'>
      <div className="info">
        <h1>Categories</h1>
        <button onClick={()=>setOpen(true)}>Add New Category</button>
      </div>
        <DataTable slug="categories" columns={columns} rows={catRows} />
        {open && <Add setOpen={setOpen} slug='category' columns={columns} />}
    </div>
  )
}

export default categories