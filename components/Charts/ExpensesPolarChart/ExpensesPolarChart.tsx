import { useEffect, useRef } from 'react';
import { Chart, PolarAreaController, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(PolarAreaController, RadialLinearScale, ArcElement, Tooltip, Legend);

export default function ExpensesPolarChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = new Chart(chartRef.current, {
      type: 'polarArea',
      data: {
        labels: ['Logement', 'Alimentation', 'Transport', 'Loisirs', 'Autres'],
        datasets: [{
          data: [400, 250, 350, 300, 250],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 205, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)'
          ],
        }],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'right' },
          title: { display: false }
        }
      }
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} />;
}
