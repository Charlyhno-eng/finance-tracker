import { Sauvegarde } from '@/infrastructure/repositories/client'

export type SauvegardeRepository = {
  find12LastMonths: () => Promise<Sauvegarde[]>
  create: (data: Omit<Sauvegarde, 'id'>) => Promise<Sauvegarde>
}
