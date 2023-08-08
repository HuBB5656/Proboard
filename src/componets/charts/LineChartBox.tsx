import { Link } from "react-router-dom"
import "./linechart.scss"
import { LineChart, Line, ResponsiveContainer,Tooltip } from 'recharts';


  type Props = {
    title: string;
    icon: string;
    color: string;
    number:number | string;
    dataKey: string;
    chartData: object[];
    percentage: number;
  };
  
function LineChartBox(props:Props) {
  return (
    <div className="linechart">
        <div className="userInfo">
             <div className="title">
                <img src={props.icon} alt="" />
                <span>{props.title}</span>
             </div>
             <h2>{props.number}</h2>

             <Link to="/" style={{color:props.color}}>
                View All
             </Link>
        </div>

        <div className="chartInfo">
         <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart  data={props.chartData}>
                  <Tooltip
                   contentStyle={{border:"none",background:"transparent"}}
                   labelStyle={{display:"none"}}
                   position={{x:10,y:50}}
                 />
                <Line type="monotone" dataKey={props.dataKey} stroke="#8884d8" strokeWidth={2} />
            </LineChart>
            </ResponsiveContainer>
         </div>

         <div className="chartText">
            <span className="percentage"style={{color: props.percentage > 0 ? "limegreen" : "tomato"}}>{props.percentage}%</span>
            <span className="duration" style={{color:props.color}}>this month</span>
         </div>
        </div>
    </div>
  )
}

export default LineChartBox