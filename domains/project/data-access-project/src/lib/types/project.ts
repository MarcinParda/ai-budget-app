import { z } from 'zod';

const projectSchema = z.object({
  id: z.number(),
  name: z.string(),
});
export const projectsSchema = z.array(projectSchema);
export type Projects = z.infer<typeof projectsSchema>;
