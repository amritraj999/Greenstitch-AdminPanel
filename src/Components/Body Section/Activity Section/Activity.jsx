import React from 'react'
import './activity.css'
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
Chart.register(ArcElement);



const Activity = () => {
  const data = {
      labels: ['Spinning', 'Transportation', 'Carding', 'Heating & Cooling'],
      datasets: [
          {
            label: 'Top emissions by type',
            data: [27, 16, 22, 35],
            backgroundColor: ['#E2FF32', '#55DBDB', '#57CC78', '#FEC102'],
            hoverBackgroundColor: ['#c9c920', '#36A2EB', '#56a868', '#ba9234']
          }
      ]
  };

  const options = {
      maintainAspectRatio: false,
      responsive: true,
      legend: {
          position: 'right'
      },
      cutoutPercentage: 60
  };

  return (
      <div className="chart-container">
          <div className='heading'>
              <span>Top emissions by type</span>
          </div>
          <div className='donut'>
              <Doughnut data={data} options={options} />
          </div>
          <div className='detail'>
            <div>
              <div style={{border:"2px solid #57CC78", borderRadius:"100%", width:"10px",height:"10px", background:"#57CC78" , display:"inline-block"}}></div>
              <span style={{marginRight:"130px",marginLeft:"8px"}}>Spinning</span> <span>22%</span><br/>
            </div>
            <div>
              <div style={{border:"2px solid #55DBDB", borderRadius:"100%", width:"10px",height:"10px", background:"#55DBDB" , display:"inline-block"}}></div>
              <span style={{marginRight:"96px",marginLeft:"8px"}}>Transportation</span> <span>16%</span><br/>
            </div>
            <div>
              <div style={{border:"2px solid #E2FF32", borderRadius:"100%", width:"10px",height:"10px", background:"#E2FF32" , display:"inline-block"}}></div>
              <span style={{marginRight:"138px",marginLeft:"8px"}}>Carding</span> <span>27%</span><br/>
            </div>
            <div>
              <div style={{border:"2px solid #FEC102", borderRadius:"100%", width:"10px",height:"10px", background:"#FEC102" , display:"inline-block"}}></div>
              <span style={{marginRight:"76px",marginLeft:"8px"}}>Heating & Cooling</span> <span>35%</span>
            </div>
          </div>
      </div>
  );
};

export default Activity;
