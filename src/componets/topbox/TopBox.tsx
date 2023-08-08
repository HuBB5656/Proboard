import "./topbox.scss"
import { topDeals } from "../../data"

function TopBox() {
  return (
    <div className="topbox">
        <h2>Top Deal</h2>
        <div className="list">
           {
            topDeals.map(user=>(
            <div className="listItem">
                <div className="userInfo">
                    <img src={user.img} alt="" />
                    <div className="textInfo">
                        <span className="name">{user.username}</span>
                        <span className="email">{user.email}</span>
                    </div>
                </div>
                <span className="amount">${user.amount}</span>
            </div>
            ))
           }
        </div>
    </div>
  )
}

export default TopBox