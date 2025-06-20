import { CreatePagesArgs } from 'gatsby';
import * as path from 'path';
import { routes } from './src/constants/routes';
import { projectMapToArray } from './src/utils/project';
import { projects } from './src/data/projects';
import { Project } from './src/types/Project';

async function createProjectPages(args: CreatePagesArgs): Promise<void> {
  const { actions } = args;
  const { createPage } = actions;
  projectMapToArray(projects).forEach((project: Project) => {
    createPage({
      path: `${routes.projects.path}/${project.id}`,
      component: path.resolve('./src/templates/Project.tsx'),
      context: {
        projectID: project.id,
      },
    });
  });
}

export async function createPages(args: CreatePagesArgs): Promise<void> {
  await createProjectPages(args);
}
