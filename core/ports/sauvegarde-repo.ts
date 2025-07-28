import { PrismaSauvegarde } from '@/shared/types/type-sauvegarde'

export type SauvegardeRepository = {
  find12LastMonths: () => Promise<PrismaSauvegarde[]>
  create: (data: Omit<PrismaSauvegarde, 'id'>) => Promise<PrismaSauvegarde>
  update: (id: number, data: Partial<Omit<PrismaSauvegarde, 'id'>>) => Promise<PrismaSauvegarde>
}
