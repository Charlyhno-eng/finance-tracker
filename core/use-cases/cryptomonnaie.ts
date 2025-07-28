import { PrismaCryptomonnaie } from '@/shared/types/type-crypto';
import { CryptomonnaieRepository } from '../ports/cryptomonnaie-repo';

export const getAllCryptos = (repository: CryptomonnaieRepository) => async (): Promise<PrismaCryptomonnaie[]> => {
  return repository.findAll();
};

export const createCrypto = (repository: CryptomonnaieRepository) => async (data: Omit<PrismaCryptomonnaie, 'id'>
): Promise<PrismaCryptomonnaie> => {
  return repository.create(data);
};

export const updateCrypto = (repository: CryptomonnaieRepository) => async (
  id: number,
  data: Partial<Omit<PrismaCryptomonnaie, 'id'>>
): Promise<PrismaCryptomonnaie> => {
  return repository.update(id, data);
};

export const deleteCrypto = (repository: CryptomonnaieRepository) => async (
  id: number
): Promise<void> => {
  return repository.delete(id);
};
