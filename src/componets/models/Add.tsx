import { GridColDef } from '@mui/x-data-grid';
import './add.scss'

type Props= {
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
    slug:string;
    columns:GridColDef[]
}
function Add(props:Props) {
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
       console.log(e);
    //    will handel api post request
    }
  return (
    <div className='add'>
        <div className="model">
            <span className='close' onClick={()=>props.setOpen(false)}><b> X </b></span>
            <h2>Add New {props.slug}</h2>
            <form onSubmit={handleSubmit}>
                {
                props.columns.filter(item=> item.field != "id" && item.field != "image").
                map((column,index) => (
                    <div key={index} className='item'>
                        <label>{column.headerName}</label>
                        <input type={column.type} name={column.field} placeholder={column.headerName} />
                    </div>
                ))
                }
                <button>Submit</button>
            </form>
        </div>        
    </div>
  )
}

export default Add