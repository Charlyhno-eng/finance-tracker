'use client';

import { useEffect, useRef } from 'react';
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend } from 'chart.js';
import { calculateTotalChrono } from '@/core/domain/finance/calculateTotalChrono';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

type WealthEvolutionChartProps = {
  labels: string[];
  values: { Compte: number[]; Cryptomonnaie: number[]; Bourse: number[] };
  visibleLines?: ('Total' | 'Compte' | 'Cryptomonnaie' | 'Bourse')[];
};

export default function WealthEvolutionChart({
  labels,
  values,
  visibleLines = ['Total', 'Compte', 'Cryptomonnaie', 'Bourse'],
}: WealthEvolutionChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const { Compte, Cryptomonnaie, Bourse } = values;
    const Total = calculateTotalChrono(Compte, Cryptomonnaie, Bourse);

    const allDatasets = {
      Total: {
        label: 'Total',
        data: Total,
        borderColor: '#1e88e5',
        tension: 0.3,
        fill: false,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      Compte: {
        label: 'Compte',
        data: Compte,
        borderColor: '#43a047',
        tension: 0.3,
        fill: false,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      Cryptomonnaie: {
        label: 'Cryptomonnaie',
        data: Cryptomonnaie,
        borderColor: '#fb8c00',
        tension: 0.3,
        fill: false,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      Bourse: {
        label: 'Bourse',
        data: Bourse,
        borderColor: '#8e24aa',
        tension: 0.3,
        fill: false,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    };

    const activeDatasets = visibleLines.map((key) => allDatasets[key]);

    const chart = new Chart(chartRef.current, {
      type: 'line',
      data: {
        labels,
        datasets: activeDatasets,
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            labels: { boxWidth: 12, font: { size: 12 } },
          },
          tooltip: { mode: 'index', intersect: false },
        },
        scales: {
          x: { title: { display: true, text: 'Mois' } },
          y: { title: { display: true, text: 'Montant (€)' }, beginAtZero: true },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [labels, values, visibleLines]);

  return <canvas ref={chartRef} />;
}
