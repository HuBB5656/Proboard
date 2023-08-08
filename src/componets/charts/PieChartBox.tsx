import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./piechart.scss";

const data = [
  { name: "Mobile", value: 400, color: "#FF8042" },
  { name: "Labtop", value: 300, color: "#FFBB28" },
  { name: "Tablet", value: 300, color: "#00C49F" },
  { name: "Desktop", value: 200, color: "#0088FE" },
];

function PieChartBox() {
  return (
    <div className="piechart">
      <h2>Leads By Source</h2>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((data) => (
                <Cell key={data.value} fill={data.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="options">
        {data.map((item) => (
          <div className="option" key={item.name}>
            <div className="itemName">
              <div className="dot" style={{ background: item.color }} />
              <span>{item.name}</span>
            </div>
            <span className="itemValue">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PieChartBox;
