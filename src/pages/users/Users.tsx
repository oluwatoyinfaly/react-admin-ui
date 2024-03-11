import { useState } from 'react';
import DataTable from '../../components/dataTables/DataTable'
import { userRows } from '../../data';
import './users.scss'
import { GridColDef } from '@mui/x-data-grid';
import Add from '../../components/add/Add';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'img',
    headerName: 'Avatar',
    width: 100,
    renderCell: (params) => (
      <img
        src={params.row.img || '/noavatar.png'}
        alt='avatar'
      />
    ),
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
  },
  {
    field: 'email',
    headerName: 'Email',
    type: 'email',
    width: 150,
  },
  {
    field: 'phone',
    headerName: 'Phone number',
    type: 'string',
    width: 150,
  },
  {
    field: 'verified',
    headerName: 'Verified',
    width: 150,
    type: 'boolean',
  },
  {
    field: 'createdAt',
    headerName: 'Created at',
    width: 150,
  }
];

const Users = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className='users'>
      <div className="info">
        <h1>Users</h1>
        <button onClick={()=>setOpen(true)}>Add New User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      {open && <Add setOpen={setOpen} slug='user' columns={columns} />}
    </div>
  )
}

export default Users