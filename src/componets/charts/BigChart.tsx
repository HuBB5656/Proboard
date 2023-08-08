import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./bigchart.scss";
const data = [
  {
    name: "Sun",
    books: 4000,
    clothes: 1000,
    electronics: 2400,
  },
  {
    name: "Mon",
    books: 3000,
    clothes: 1600,
    electronics: 4000,
  },
  {
    name: "Tus",
    books: 2000,
    clothes: 3000,
    electronics: 1200,
  },
  {
    name: "Wen",
    books: 3000,
    clothes: 2400,
    electronics: 1400,
  },
  {
    name: "Trs",
    books: 2000,
    clothes: 3000,
    electronics: 1300,
  },
  {
    name: "Fri",
    books: 2100,
    clothes: 1800,
    electronics: 2700,
  },
  {
    name: "Sat",
    books: 2400,
    clothes: 3000,
    electronics: 3000,
  },
];
function BigChart() {
  return (
    <div className="bigchart">
      <h2>Title</h2>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="books"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="clothes"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="electronics"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BigChart;
