import React from 'react';
import './DonutChart.css';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);


const DonutChart = () => {
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
                <span style={{marginRight:"150px"}}>Spinning</span> <span>22%</span><br/>
                <span style={{marginRight:"123px"}}>Transportation</span> <span>16%</span><br/>
                <span style={{marginRight:"155px"}}>Carding</span> <span>27%</span><br/>
                <span style={{marginRight:"100px"}}>Heating & Cooling</span> <span>35%</span>
            </div>
        </div>
    );
};

export default DonutChart;
