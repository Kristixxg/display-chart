import React, {useState, useEffect} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const BarChart = () => {

    const [chart, setChart] =  useState([]);

    var baseUrl = "https://api.coinranking.com/v2/coins/?limit=10";
    //bring in CORS anywhere to prevent CORS errors
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    var apiKey = "coinranking5c4f074b8a792ad39b71f299f09d71250f58717d9cf30e23";


    useEffect(() => {
        const fetchCoins = async () => {
            await fetch(`${proxyUrl}${baseUrl}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `${apiKey}`,
                    'Access-Control-Allow-Origin': '*'
                }
            })
            .then((response)=> {
                response.json()
            .then((data) => {
                // console.log(data);
                const labels = data.data.coins.map((coin)=>{
                    return coin.name;
                })
                // console.log(labels);
                setChart(labels);
            })
            })
            .catch((error)=> {
                console.log(error);
            })
        }
        fetchCoins()
    }, [baseUrl, proxyUrl, apiKey])




    var data =  {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
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
        maintainAspectAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        Legend: {
            labels: {
                fontSize: 26,
            }
        }
    }

  return (
    <Bar data={data} options={options} height={100}/>
  )
}

export default BarChart;