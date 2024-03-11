import { GridColDef } from '@mui/x-data-grid'
import './add.scss'

type Props = {
    slug: string
    columns: GridColDef[]
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Add = (props: Props) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('submitted')
        props.setOpen(false)
    }

  return (
    <div className='add'>
        <div className='modal'>
            <span className='close' onClick={()=>props.setOpen(false)}>X</span>
            <h2>Add new {props.slug}</h2>
            <form action="" onSubmit={handleSubmit}>
                {
                    props.columns.filter(item=>item.field!=='id' && item.field!=='img')
                    .map((column) => (
                        <div className='item' key={column.field}>
                            <label className='label' htmlFor={column.field}>{column.headerName}</label>
                            <input type={column.type} id={column.field} placeholder={column.headerName} />
                        </div>
                    ))
                }
                <button type='submit'>Send</button>
            </form>
        </div>
    </div>
  )
}

export default Add