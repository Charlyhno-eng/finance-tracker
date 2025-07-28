import { Sauvegarde } from '@/infrastructure/repositories/client'
import { SauvegardeRepository } from '../ports/sauvegarde-repo'

export const getAllSauvegardes = (repo: SauvegardeRepository) => async (): Promise<Sauvegarde[]> => {
  return repo.find12LastMonths()
}

export const createSauvegarde = (repo: SauvegardeRepository) => async (
  data: Omit<Sauvegarde, 'id'>
): Promise<Sauvegarde> => {
  return repo.create(data)
}
