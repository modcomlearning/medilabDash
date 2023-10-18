import React from 'react';
import { PieChart, Pie, Cell , ResponsiveContainer} from 'recharts';

	// Sample data
	const data = [
		{ name: 'Geeksforgeeks', students: 400 },
		{ name: 'Technical scripter', students: 700 },
		{ name: 'Geek-i-knack', students: 200 },
		{ name: 'Geek-o-mania', students: 1000 }
    ];
    
  const COLORS = ['#0088fe', '#00c49f', '#ffbb28', '#ff8042'];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
      
   );
  }
const MyPieChart = () => {

  const chartStyle = {
    width: '100%', // 50% of the parent container's width
    height: '50%', // 50% of the parent container's height
  };
  return (
  
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="students"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
   
    );
   
}

export default MyPieChart;
