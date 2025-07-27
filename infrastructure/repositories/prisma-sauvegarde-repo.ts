import { PrismaClient } from '@/infrastructure/repositories/client'
import { SauvegardeRepository } from '@/core/ports/sauvegarde-repo'

const prisma = new PrismaClient()

export const prismaSauvegardeRepository: SauvegardeRepository = {
  findAll: async () => {
    return prisma.sauvegarde.findMany({
      orderBy: { date: 'desc' },
      take: 12,
    })
  },

  create: async (data) => {
    return prisma.sauvegarde.create({ data })
  },
}
