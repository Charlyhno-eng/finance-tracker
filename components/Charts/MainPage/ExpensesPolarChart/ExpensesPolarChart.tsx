import { useEffect, useRef } from 'react';
import { Chart, PolarAreaController, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import { generateColors } from '@/shared/helpers';

Chart.register(PolarAreaController, RadialLinearScale, ArcElement, Tooltip, Legend);

type Props = {
  labels: string[];
  data: number[];
};

export default function ExpensesPolarChart({ labels, data }: Props) {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const backgroundColors = generateColors(data.length);

    const chart = new Chart(chartRef.current, {
      type: 'polarArea',
      data: {
        labels,
        datasets: [{ data, backgroundColor: backgroundColors }],
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'right' }, title: { display: false } }
      }
    });

    return () => {
      chart.destroy();
    };
  }, [labels, data]);

  return <canvas ref={chartRef} />;
}
