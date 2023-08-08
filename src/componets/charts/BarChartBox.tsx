import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./barchart.scss";

type Props = {
  title: string;
  dataKey: string;
  color: string;
  data: object[];
};
function BarChartBox(props: Props) {
  return (
    <div className="barchart">
      <h2 style={{ color: props.color }}>{props.title}</h2>
      <ResponsiveContainer width="99%" height={150}>
        <BarChart data={props.data}>
          <Bar dataKey={props.dataKey} fill={props.color} />
          <Tooltip
            contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
            labelStyle={{ display: "none" }}
            cursor={{ fill: "none" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartBox;
