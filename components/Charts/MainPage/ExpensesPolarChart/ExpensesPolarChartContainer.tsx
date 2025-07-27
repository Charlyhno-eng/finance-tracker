'use client';

import ExpensesPolarChart from './ExpensesPolarChart';

type ExpensesPolarChartContainerProps = {
  labels: string[];
  data: number[];
};

export default function ExpensesPolarChartContainer({ labels, data }: ExpensesPolarChartContainerProps) {
  if (data.length === 0) {
    return <p>Aucune dépense ce mois-ci.</p>;
  }

  return <ExpensesPolarChart labels={labels} data={data} />;
}
