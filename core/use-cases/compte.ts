import { PrismaCompte } from '@/shared/types/types-compte';
import { CompteRepository } from '../ports/compte-repo'

export const getAllComptes = (repository: CompteRepository) => async (): Promise<PrismaCompte[]> => {
  return repository.findAll()
}

export const updateCompte = (repository: CompteRepository) => async (
  id: number,
  data: Partial<Omit<PrismaCompte, 'id'>>
): Promise<PrismaCompte> => {
  return repository.update(id, data)
}
