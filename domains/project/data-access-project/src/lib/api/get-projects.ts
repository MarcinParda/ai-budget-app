import { baseApi } from '@ai-budget-app/shared/util-shared-api/src';
import { Projects, projectsSchema } from '../types/project';

export async function getProjects() {
  return await baseApi.getRequest<Projects>('/users', projectsSchema);
}
