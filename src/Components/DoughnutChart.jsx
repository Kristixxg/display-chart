import React, {useState, useEffect} from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart() {

    const [chart, setChart] = useState([]);

    var baseUrl = "https://api.coinranking.com/v2/coins/?limit=10";
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    var apiKey = "coinranking5c4f074b8a792ad39b71f299f09d71250f58717d9cf30e23";

    useEffect(()=>{
        fetch(`${proxyUrl}${baseUrl}`)
        .then((response)=>{
            response.json()
        .then((data)=>{
            // console.log(data);
            setChart(data.data.coins);
        })
        })
        .catch((err)=>console.error(err))
    
    },[])


    const data = {
        labels: chart.map((ele)=>ele.name),
        datasets: [
          {
            label: `${chart.length} of Coins Available`,
            data: chart.map((num)=>num.price),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    
    
      return (
        <Doughnut data={data} />
     )
}

export default DoughnutChart;