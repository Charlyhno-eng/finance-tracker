import { Sauvegarde } from '@/infrastructure/repositories/client'

export type SauvegardeRepository = {
  findAll: () => Promise<Sauvegarde[]>
  create: (data: Omit<Sauvegarde, 'id'>) => Promise<Sauvegarde>
}
