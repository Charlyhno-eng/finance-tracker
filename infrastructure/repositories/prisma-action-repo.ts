import { PrismaClient } from '@/infrastructure/repositories/client';
import { ActionRepository } from '@/core/ports/action-repo';

const prisma = new PrismaClient();

export const prismaActionRepository: ActionRepository = {
  findAll: async () => {
    return prisma.action.findMany();
  },

  create: async (data) => {
    return prisma.action.create({ data });
  },

  update: async (id, data) => {
    return prisma.action.update({
      where: { id },
      data,
    });
  },

  delete: async (id) => {
    await prisma.action.delete({
      where: { id },
    });
  },
};
