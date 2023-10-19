import React from 'react';
import { PieChart, Pie, Cell , ResponsiveContainer} from 'recharts';
import { useState, useEffect } from 'react';
import axiosInstance from '../helpers/axiosInstance';
import CheckSession from '../helpers/CheckSession';
	// Sample data
  
 

  const COLORS = ['#0088fe', '#00c49f', '#ffbb28'];
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

  //static Array 
   const { lab_name, lab_id, refresh_token } = CheckSession() //get Lab_id ..
   const [data, setData] = useState([])  //empty Array Hook to Update Later
   const {instance}  = axiosInstance()
    useEffect(() => {
        instance.post("/pie1", {
            lab_id: lab_id
        })
            .then(function (response) {
                console.log(response);
                setData(response.data)//important to Update Array
               
            })
            .catch(function (error) {
                alert(error.message);
        })//end catch
    }, [lab_id]);// end useeffect   
  
    console.log("Our data "+data)





  const chartStyle = {
    width: '100%', // 50% of the parent container's width
    height: '50%', // 50% of the parent container's height
  };
  return (
  
        <PieChart width={350} height={350}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={true}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="Count"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
   
    );
   
}

export default MyPieChart;
