import React from "react";
import "./Marketing.css";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

const Marketing = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
      },
    },
  };

  const labels = ["TODO", "DOING", "DONE"];

  const data = {
    labels,
    datasets: [
      {
        data: [4, 7, 8],
        label: "Tasks progress",
        borderColor: "#645fc6",
        backgroundColor: "#645fc6",
      },
    ],
  };
  return (
    <>
      <div className="home__container">
        <div className="aside">
          <Sidebar />
        </div>
        <div className="nav">
          <Navbar />
        </div>
        <div className="main">
          <div className="chart__card">
            <Line options={options} data={data} className="line" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Marketing;
