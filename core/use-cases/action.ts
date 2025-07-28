import { PrismaAction } from '@/shared/types/type-bourse';
import { ActionRepository } from '../ports/action-repo';

export const getAllActions = (repository: ActionRepository) => async (): Promise<PrismaAction[]> => {
  return repository.findAll();
};

export const createAction = (repository: ActionRepository) => async (
  data: Omit<PrismaAction, 'id'>
): Promise<PrismaAction> => {
  return repository.create(data);
};

export const updateAction = (repository: ActionRepository) => async (
  id: number,
  data: Partial<Omit<PrismaAction, 'id'>>
): Promise<PrismaAction> => {
  return repository.update(id, data);
};

export const deleteAction = (repository: ActionRepository) => async (
  id: number
): Promise<void> => {
  return repository.delete(id);
};
