import { GridColDef, } from "@mui/x-data-grid";
import Datatable from "../../componets/datetable/Datatable";
import "./users.scss";
import { users } from "../../data";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field:"avatar",headerName:"Avatar", width:100,
      renderCell:(params)=>{
        return <img src={params.row.img || "/noavatar.png"} alt="" />
      }
    },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      type: "string",
      width: 110,
      editable: true,
    },
      {
      field: "phone",
      headerName: "Phone",
      type: "string",
      width: 110,
      editable: true,
    },
      {
      field: "createdAt",
      headerName: "CreatedAt",
      type: "string",
      width: 110,
      editable: true,
    },
    {
     field:"verified", headerName:"Verified", type:"boolean"
    },
  ];
  
  // 
function Users() {
  return (
    <div className="users">
      <div className="title">
        <h2>Users</h2>
        <button>Add New User</button>
      </div>
      <div className="table">
        <Datatable slug="users" columns={columns} rows={users}/>
      </div>
    </div>
  );
}

export default Users;
