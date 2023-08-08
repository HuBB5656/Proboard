import BarChartBox from "../../componets/charts/BarChartBox";
import LineChartBox from "../../componets/charts/LineChartBox";
import TopBox from "../../componets/topbox/TopBox";
import {
  conversion,
  profitData,
  totalProducts,
  totalRevenu,
  totalVisit,
  userDataBox,
} from "../../data";
import "./home.scss";
import PieChartBox from "../../componets/charts/PieChartBox";
import BigChart from "../../componets/charts/BigChart";

//Home
function Home() {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>

      {/* chartbox start */}
      <div className="box box2">
        <LineChartBox {...userDataBox} />
      </div>
      <div className="box box3">
        <LineChartBox {...conversion} />
      </div>
      {/* chart box end */}

      <div className="box box4">
        <PieChartBox />
      </div>

      {/* chart box start */}
      <div className="box box5">
        <LineChartBox {...totalRevenu} />
      </div>
      <div className="box box6">
        <LineChartBox {...totalProducts} />
      </div>
      {/* chart box end */}

      <div className="box box7">
        <BigChart />
      </div>

      <div className="box box8">
        <BarChartBox {...profitData} />
      </div>

      <div className="box box9">
        <BarChartBox {...totalVisit} />
      </div>
    </div>
  );
}

export default Home;
