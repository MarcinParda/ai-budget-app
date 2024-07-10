'use client';

import { useProjects } from '@ai-budget-app/project/data-access-project/src';
import { UiProjectCard } from '@ai-budget-app/ui-project-card';
import { projectsListWithoutCockpit } from '@ai-budget-app/util-project';
import { useEffect } from 'react';

export default function CockpitPage() {
  const { error } = useProjects();

  useEffect(() => {
    if (error) {
      console.error('Error fetching projects:', error);
    }
  }, [error]);

  return (
    <div className="flex items-center justify-center">
      {projectsListWithoutCockpit.map((project) => (
        <UiProjectCard
          key={project.name}
          title={project.name}
          description={project.description}
          url={project.url}
          Icon={project.Icon}
        />
      ))}
    </div>
  );
}
