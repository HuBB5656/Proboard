import { useState } from "react";
import Datatable from "../../componets/datetable/Datatable";
import Add from "../../componets/models/Add";
import { GridColDef } from "@mui/x-data-grid";
import { ProductList } from "../../data";


const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 30 },
    {
      field:"image",headerName:"Image", width:80,
      renderCell:(params)=>{
        return <img src={params.row.img || "/noavatar.png"} alt="" />
      }
    },
    {
      field: "title",
      headerName: "Title",
      width: 200,
      editable: true,
      type:'string'
    },
    {
      field: "color",
      headerName: "Color",
      width: 150,
      editable: true,
      type:'string'

    },
    {
      field: "price",
      headerName: "Price",
      type: "string",
      width: 150,
      editable: true,
    },
      {
      field: "producer",
      headerName: "Producer",
      type: "string",
      width: 200,
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
     field:"inStock", 
     headerName:"In Stock", 
     type:"boolean",
     editable:true
    },
  ];

  //runderer
function Products() {
   const [open,setOpen]  = useState(false);
  return (
    <div className="users">
      <div className="title">
        <h2>Products</h2>
        <button onClick={()=> setOpen(true)}>Add New Product</button>
      </div>
      <div className="table">
        <Datatable slug="products" columns={columns} rows={ProductList}/>
        {open && <Add slug="User" columns={columns} setOpen = {setOpen}/>}
      </div>

    </div>
  );
}

export default Products