import { GridColDef, } from "@mui/x-data-grid";
import Datatable from "../../componets/datetable/Datatable";
import "./users.scss";
import { users } from "../../data";
import { useState } from "react";
import Add from "../../componets/models/Add";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 30 },
    {
      field:"image",headerName:"Image", width:80,
      renderCell:(params)=>{
        return <img src={params.row.img || "/noavatar.png"} alt="" />
      }
    },
    {
      field: "firstName",
      headerName: "First name",
      width: 100,
      editable: true,
      type:'string'
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 100,
      editable: true,
      type:'string'

    },
    {
      field: "email",
      headerName: "Email",
      type: "string",
      width: 170,
      editable: true,
    },
      {
      field: "phone",
      headerName: "Phone",
      type: "string",
      width: 150,
      editable: true,
    },
      {
      field: "createdAt",
      headerName: "CreatedAt",
      type: "string",
      width: 100,
      editable: true,
    },
    {
     field:"verified", 
     headerName:"Verified", 
     type:"boolean",
     editable:true
    },
  ];
  
  // 
function Users() {
  const [open,setOpen]  = useState(false);
  return (
    <div className="users">
      <div className="title">
        <h2>Users</h2>
        <button onClick={()=> setOpen(true)}>Add New User</button>
      </div>
      <div className="table">
        <Datatable slug="users" columns={columns} rows={users}/>
        {open && <Add slug="User" columns={columns} setOpen = {setOpen}/>}
      </div>

    </div>
  );
}

export default Users;
