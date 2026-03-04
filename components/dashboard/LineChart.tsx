"use client";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import type { InsightSeriesPoint } from "@/lib/types/insight";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
);

type Props = { title: string; data: InsightSeriesPoint[]; color?: string };

export default function LineChart({
  title,
  data,
  color = "rgb(37, 99, 235)",
}: Props) {
  const labels = data.map((p) => p.date);
  const values = data.map((p) => p.value);

  return (
    <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold text-black mb-2">{title}</h3>

      <Line
        data={{
          labels,
          datasets: [
            {
              label: title,
              data: values,
              borderColor: color,
              backgroundColor: `${color}33`,
              tension: 0.3,
              fill: true,
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: { legend: { display: false } },
          scales: {
            x: { ticks: { color: "#6b7280" } },
            y: { ticks: { color: "#6b7280" } },
          },
        }}
      />
    </div>
  );
}
