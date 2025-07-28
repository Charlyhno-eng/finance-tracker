import { PrismaAction } from '@/shared/types/type-bourse';

export type ActionRepository = {
  findAll: () => Promise<PrismaAction[]>;
  create: (data: Omit<PrismaAction, 'id'>) => Promise<PrismaAction>;
  update: (id: number, data: Partial<Omit<PrismaAction, 'id'>>) => Promise<PrismaAction>;
  delete: (id: number) => Promise<void>;
};
