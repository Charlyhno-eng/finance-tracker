import { Cryptomonnaie } from '@/infrastructure/repositories/client';

export type CryptomonnaieRepository = {
  findAll: () => Promise<Cryptomonnaie[]>;
  create: (data: Omit<Cryptomonnaie, 'id'>) => Promise<Cryptomonnaie>;
  update: (id: number, data: Partial<Omit<Cryptomonnaie, 'id'>>) => Promise<Cryptomonnaie>;
  delete: (id: number) => Promise<void>;
};
