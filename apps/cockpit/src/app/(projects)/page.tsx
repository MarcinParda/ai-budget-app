import { UiProjectCard } from '@ai-budget-app/ui-project-card';
import { projectsListWithoutCockpit } from '@ai-budget-app/util-project';

export default function CockpitPage() {
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
