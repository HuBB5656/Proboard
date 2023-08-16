import Single from "../../componets/single/Single";
import { singleUser } from "../../data";
import "./user.scss";

function user() {
  return (
    <div className="user">
      <Single {...singleUser} />
    </div>
  );
}

export default user;
