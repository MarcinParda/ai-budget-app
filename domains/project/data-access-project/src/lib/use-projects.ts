import { useQuery } from '@tanstack/react-query';
import { getProjects } from './api/get-projects';
import { Projects } from './types/project';

export function useProjects() {
  return useQuery<Projects>({
    queryKey: ['projects'],
    queryFn: getProjects,
  });
}
