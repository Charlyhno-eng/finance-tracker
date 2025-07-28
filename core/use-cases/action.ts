import { Action } from '@/infrastructure/repositories/client';
import { ActionRepository } from '../ports/action-repo';

export const getAllActions = (repository: ActionRepository) => async (): Promise<Action[]> => {
  return repository.findAll();
};

export const createAction = (repository: ActionRepository) => async (
  data: Omit<Action, 'id'>
): Promise<Action> => {
  return repository.create(data);
};

export const updateAction = (repository: ActionRepository) => async (
  id: number,
  data: Partial<Omit<Action, 'id'>>
): Promise<Action> => {
  return repository.update(id, data);
};

export const deleteAction = (repository: ActionRepository) => async (
  id: number
): Promise<void> => {
  return repository.delete(id);
};
