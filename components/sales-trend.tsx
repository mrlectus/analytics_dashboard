"use client";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Filler,
  Legend
);

import { Bar } from "react-chartjs-2";
import { SVGArrowDown } from "./icons/icons";

export const options: ChartOptions<"bar"> = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
  },
};

export const data: ChartData<"bar"> = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      data: [
        5500, 20000, 2500, 30000, 10000, 45000, 10000, 25000, 35000, 2500,
        30000, 22000, 50000,
      ],
      backgroundColor: ({ chart: { ctx } }) => {
        const bg = ctx.createLinearGradient(0, 0, 0, 170);
        bg.addColorStop(0, "#34CAA5");
        bg.addColorStop(1, "#15E0EE");
        return bg;
      },
      borderRadius: 25,
    },
  ],
};

export const SalesTrend = () => {
  return (
    <Card className="w-[50%]">
      <CardTitle className="m-5 text-md flex justify-between items-center">
        <span>Sales Trends</span>
        <div className="flex font-normal gap-1 text-xs items-center">
          Sort by:
          <span className="border rounded-full flex items-center gap-1 p-2 cursor-pointer">
            Weekly <SVGArrowDown />
          </span>
        </div>
      </CardTitle>
      <CardContent>
        <Bar options={options} data={data} />
      </CardContent>
    </Card>
  );
};
