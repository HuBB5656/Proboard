import "./navbar.scss"
function Navbar() {
  return (
   <div className="navbar">
     <div className="logo">
        <img src="logo.svg" alt="" />
        <span>ProBourd</span>
    </div>

    <div className="icons">
         <img src="search.svg" className="icon"/>
         <img src="app.svg" className="icon"/>
         <img src="expand.svg" className="icon"/>
         
         <div className="notification">
          <img src="notifications.svg" className="icon"/>
          <span>1</span>
         </div>

         <div className="user">
            <img src="https://th.bing.com/th/id/OIP.ysdd9pBlwnNdnxQoC8y4KQHaHa?pid=ImgDet&rs=1" alt="" />
            <span> User One </span>
         </div>

         <img src="setting.svg" className="icon"/>
         

    </div>
   </div>
  )
}

export default Navbar