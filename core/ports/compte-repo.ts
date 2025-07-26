import { Compte } from '@/infrastructure/repositories/client'

export type CompteRepository = {
  findAll: () => Promise<Compte[]>
  update: (id: number, data: Partial<Omit<Compte, 'id'>>) => Promise<Compte>
}
