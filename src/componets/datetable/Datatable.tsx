import { Link } from "react-router-dom";
import "./datatable.scss";

import {
  DataGrid,
  GridColDef,
  GridToolbar,
} from "@mui/x-data-grid";

type Props = {
  columns : GridColDef [],
  rows : object [],
  slug :string
}
function Datatable(props:Props) {
  const  handleDelete = (id:number) => {
      console.log(id + ' Delete row successfully')
   }
  const actionButton : GridColDef = {
    field:"action",
    headerName:"Action",
    width:200,
    renderCell:(params)=>{
      return (
      <div className="action"> 
          <Link to={`/${props.slug}/${params.row.id}`}>
              <img src="view.svg" alt="" />
          </Link>
          <div className="delete" onClick={()=>handleDelete(params.row.id)}>
            <img src="delete.svg" alt="" />
          </div>
      </div>
      );
    }
  }
  return (
    <div className="datatable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionButton]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 100 },
          },
        }}
        disableColumnFilter
        disableColumnMenu
        disableColumnSelector
        disableDensitySelector
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
}

export default Datatable;
