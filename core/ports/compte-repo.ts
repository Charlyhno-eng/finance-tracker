import { PrismaCompte } from '@/shared/types/types-compte';

export type CompteRepository = {
  findAll: () => Promise<PrismaCompte[]>
  update: (id: number, data: Partial<Omit<PrismaCompte, 'id'>>) => Promise<PrismaCompte>
}
