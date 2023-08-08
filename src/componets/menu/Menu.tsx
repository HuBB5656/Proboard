import { Link } from "react-router-dom"
import {menu} from "../../data"

import "./menu.scss"
function Menu() {
  return (
    <div className="menu">
       {
        menu.map((item)=>(
          <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
            
          {
            item.listItem.map((listItem) => (
              <Link className="itemList" to={listItem.url} key={listItem.id} >
                <img src={listItem.icon} alt="" />
                <span className="listItemTitle">{listItem.title}</span>
             </Link>
            ))
          }
       </div>
        ))
       }
    </div>
    )
}

export default Menu