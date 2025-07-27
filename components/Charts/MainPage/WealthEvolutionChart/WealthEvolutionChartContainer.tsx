'use client';

import WealthEvolutionChart from './WealthEvolutionChart';

type WealthChartContainerProps = {
  labels: string[];
  values: { Compte: number[]; Cryptomonnaie: number[]; Bourse: number[] };
};

export default function WealthEvolutionChartContainer({ labels, values }: WealthChartContainerProps) {
  return (
    <WealthEvolutionChart
      labels={labels}
      values={values}
      visibleLines={['Total', 'Compte', 'Cryptomonnaie', 'Bourse']}
    />
  );
}
