import { PrismaClient } from '@/infrastructure/repositories/client'
import { CompteRepository } from '@/core/ports/compte-repo'

const prisma = new PrismaClient()

export const prismaCompteRepository: CompteRepository = {
  findAll: async () => {
    return prisma.compte.findMany()
  },

  update: async (id, data) => {
    return prisma.compte.update({
      where: { id },
      data,
    })
  }
}
