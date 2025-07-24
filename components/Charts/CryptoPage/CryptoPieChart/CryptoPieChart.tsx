'use client';

import { useEffect, useRef } from 'react';
import { Chart, PieController, ArcElement, Tooltip, Legend, CategoryScale } from 'chart.js';
import { generateColors } from '@/utils/reusableFunctions';

Chart.register(PieController, ArcElement, Tooltip, Legend, CategoryScale);

type CryptoPieChartProps = {
  data: { label: string; value: number }[];
};

export default function CryptoPieChart({ data }: CryptoPieChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const backgroundColors = generateColors(data.length);

    const chart = new Chart(chartRef.current, {
      type: 'pie',
      data: {
        labels: data.map(item => item.label),
        datasets: [{
          data: data.map(item => item.value),
          backgroundColor: backgroundColors,
          borderColor: '#0e0f1a',
          borderWidth: 2,
        }],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom', labels: { color: '#fff', font: { size: 14 } } },
          title: { display: false },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [data]);

  return <canvas ref={chartRef} style={{ width: '100%', height: '100%' }} />;
}
