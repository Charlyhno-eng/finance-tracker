import { PrismaCryptomonnaie } from '@/shared/types/type-crypto';

export type CryptomonnaieRepository = {
  findAll: () => Promise<PrismaCryptomonnaie[]>;
  create: (data: Omit<PrismaCryptomonnaie, 'id'>) => Promise<PrismaCryptomonnaie>;
  update: (id: number, data: Partial<Omit<PrismaCryptomonnaie, 'id'>>) => Promise<PrismaCryptomonnaie>;
  delete: (id: number) => Promise<void>;
};
