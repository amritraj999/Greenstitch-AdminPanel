import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis,
  CartesianGrid
} from 'recharts';

const App = () => {

  const data = [
    { name: 'Jan', x: 125, y: 50, z: 36, a: 30 },
    { name: 'feb', x: 75, y: 35, z: 73, a: 12 },
    { name: 'Mar', x: 150, y: 60, z: 42, a: 12 },
    { name: 'Apr', x: 75, y: 105, z: 53, a: 12 },
    { name: 'May', x: 95, y: 90, z: 30, a: 12 },
    { name: 'Jun', x: 135, y: 75, z: 35, a: 12 },
    { name: 'July', x: 145, y: 80, z: 51, a: 12 },
  ];

  return (
    <div className='graph'>
      <BarChart width={800} height={500} data={data} >
        <CartesianGrid />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="x" stackId="a" fill="#57CC78" />
        <Bar dataKey="y" stackId="a" fill="#55DBDB" />
        <Bar dataKey="z" stackId="a" fill="#E2FF32" />
        <Bar dataKey="a" stackId="a" fill="#FEC102" />
      </BarChart>
    </div>
  );
}

export default App;
