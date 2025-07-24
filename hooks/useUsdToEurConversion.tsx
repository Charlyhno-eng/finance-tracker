import { useState, useEffect } from 'react';

export function useUsdToEurConversion() {
  const [conversionRate, setConversionRate] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchConversionRate() {
      try {
        const res = await fetch('https://api.frankfurter.app/latest?from=USD&to=EUR');
        if (!res.ok) throw new Error('Failed to fetch exchange rate');
        const data = await res.json();
        setConversionRate(data.rates.EUR);
        setError(null);
      } catch {
        setError('Could not load exchange rate');
      } finally {
        setLoading(false);
      }
    }
    fetchConversionRate();
  }, []);

  return { conversionRate, error, loading };
}
