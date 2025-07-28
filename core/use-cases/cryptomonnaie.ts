import { Cryptomonnaie } from '@/infrastructure/repositories/client';
import { CryptomonnaieRepository } from '../ports/cryptomonnaie-repo';

export const getAllCryptos = (repository: CryptomonnaieRepository) => async (): Promise<Cryptomonnaie[]> => {
  return repository.findAll();
};

export const createCrypto = (repository: CryptomonnaieRepository) => async (data: Omit<Cryptomonnaie, 'id'>
): Promise<Cryptomonnaie> => {
  return repository.create(data);
};

export const updateCrypto = (repository: CryptomonnaieRepository) => async (
  id: number,
  data: Partial<Omit<Cryptomonnaie, 'id'>>
): Promise<Cryptomonnaie> => {
  return repository.update(id, data);
};

export const deleteCrypto = (repository: CryptomonnaieRepository) => async (
  id: number
): Promise<void> => {
  return repository.delete(id);
};
