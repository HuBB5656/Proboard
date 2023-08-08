
import LineChartBox from "../../componets/charts/LineChartBox"
import TopBox from "../../componets/topbox/TopBox"
import { conversion, totalProducts, totalRevenu, userDataBox } from "../../data"
import "./home.scss"
function Home() {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox/>
      </div>
      <div className="box box2"><LineChartBox {...userDataBox} /></div>
      <div className="box box3"><LineChartBox {...conversion} /></div>
      <div className="box box4">Box 4</div>
      <div className="box box5"><LineChartBox {...totalRevenu} /></div>
      <div className="box box6"><LineChartBox {...totalProducts}/></div>
      <div className="box box7">Box 7</div>
      <div className="box box8">Box 8</div>
      <div className="box box9">Box 9</div>
    </div>
  )
}

export default Home