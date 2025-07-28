import { PrismaSauvegarde } from '@/shared/types/type-sauvegarde'
import { SauvegardeRepository } from '../ports/sauvegarde-repo'

export const getAllSauvegardes = (repo: SauvegardeRepository) => async (): Promise<Sauvegarde[]> => {
  return repo.find12LastMonths()
}

export const createSauvegarde = (repo: SauvegardeRepository) => async (
  data: Omit<PrismaSauvegarde, 'id'>
): Promise<PrismaSauvegarde> => {
  return repo.create(data)
}

export const updateSauvegarde = (repo: SauvegardeRepository) => async (
  id: number,
  data: Partial<Omit<PrismaSauvegarde, 'id'>>
): Promise<PrismaSauvegarde> => {
  return repo.update(id, data)
}
