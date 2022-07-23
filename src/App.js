import './App.css';
import BarChart from './Components/BarChart';
import DoughnutChart from './Components/DoughnutChart';
import LineChart from './Components/LineChart';

function App() {
  return (
    <div className="App">
      <BarChart />
      <DoughnutChart />
      <LineChart />
    </div>
  );
}

export default App;
