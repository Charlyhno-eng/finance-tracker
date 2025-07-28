import { PrismaClient } from '@/infrastructure/repositories/client';
import { CryptomonnaieRepository } from '@/core/ports/cryptomonnaie-repo';

const prisma = new PrismaClient();

export const prismaCryptomonnaieRepository: CryptomonnaieRepository = {
  findAll: async () => {
    return prisma.cryptomonnaie.findMany();
  },

  create: async (data) => {
    return prisma.cryptomonnaie.create({ data });
  },

  update: async (id, data) => {
    return prisma.cryptomonnaie.update({
      where: { id }, data
    });
  },

  delete: async (id) => {
    await prisma.cryptomonnaie.delete({
      where: { id },
    });
  },
};
