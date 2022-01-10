import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useProductContext } from "../store/ProductContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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

const labels = ["January", "February", "March", "April", "May", "Juni"];
const data = {
  labels,
  datasets: [
    {
      label: "Orders With discount",
      data: [12, 9, 22, 12, 5, 18],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Orders Without discount",
      data: [5, 12, 2, 11, 15, 1],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export const MyChart = () => {
  const { products } = useProductContext();
  products.map((product) => product.name);
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};
