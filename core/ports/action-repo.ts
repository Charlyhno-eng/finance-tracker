import { Action } from '@/infrastructure/repositories/client';

export type ActionRepository = {
  findAll: () => Promise<Action[]>;
  create: (data: Omit<Action, 'id'>) => Promise<Action>;
  update: (id: number, data: Partial<Omit<Action, 'id'>>) => Promise<Action>;
  delete: (id: number) => Promise<void>;
};
