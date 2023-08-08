import Datatable from "../../componets/datetable/Datatable";
import "./users.scss";
function Users() {
  return (
    <div className="users">
      <div className="title">
        <h2>Users</h2>
        <button>Add New User</button>
      </div>
      <div className="table">{/* <Datatable /> */}</div>
    </div>
  );
}

export default Users;
