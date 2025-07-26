import { Compte } from '@/infrastructure/repositories/client'
import { CompteRepository } from '../ports/compte-repo'

export const getAllComptes = (repository: CompteRepository) => async (): Promise<Compte[]> => {
  return repository.findAll()
}

export const updateCompte = (repository: CompteRepository) => async (
  id: number,
  data: Partial<Omit<Compte, 'id'>>
): Promise<Compte> => {
  return repository.update(id, data)
}
