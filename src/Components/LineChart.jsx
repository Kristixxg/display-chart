import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {

    const [chart, setChart] =  useState([]);

    var baseUrl = "https://api.coinranking.com/v2/coins/?limit=10";
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    var apiKey = "coinranking5c4f074b8a792ad39b71f299f09d71250f58717d9cf30e23";


    useEffect(()=>{
        const fetchCoins = async()=>{
            fetch(`${proxyUrl}${baseUrl}`)
            .then((response)=>{
                response.json()
            .then((data)=>{
                setChart(data.data.coins)
            })
            })
            .catch((err)=>console.error(err));
        }
        fetchCoins();
    }, [proxyUrl, baseUrl, apiKey])


   
    var data =  {
        labels: chart.map((ele)=> {
            return ele.name;
        }),
        datasets: [{
            label: `${chart.length} Coins Available`,
            data: chart.map((num)=>{
                return num.price;
            }),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };

    var options = {
        responsive: true,
        plugins: {

          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
      };
      

  return (
    <Line data={data} options={options} height={50}/>
  )
}

export default LineChart;
