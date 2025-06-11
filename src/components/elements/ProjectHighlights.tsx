import React from 'react';
import { FiExternalLink } from '@react-icons/all-files/fi/FiExternalLink';
import { Projects } from '../../types/Project';
import ProjectPreview from './ProjectPreview';
import H, { hLevel } from '../shared/H';
import HyperLink from '../shared/HyperLink';

type ProjectHighlightsProps = {
  projects: Projects;
};

const ProjectHighlights: React.FC<ProjectHighlightsProps> = ({ projects }) => {
  const projectHighlightsHeader = (
    <div className="flex gap-2 items-center mb-8">
      <H level={hLevel.h2} className="font-bold text-2xl">
        Project Highlights
      </H>
      <HyperLink
        link={{ url: '/projects' }} // Replace with actual projects route
        className="flex items-center hover:underline group"
      >
        <FiExternalLink className="text-base" />
        <span className="text-sm mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          View More
        </span>
      </HyperLink>
    </div>
  );

  const highlightedProjects = Object.values(projects).filter(
    (project) => project.highlight,
  );

  const projectsElements = highlightedProjects.map((project) => {
    return <ProjectPreview project={project} key={project.id} />;
  });

  if (highlightedProjects.length === 0) return null;

  return (
    <section className="my-12">
      {projectHighlightsHeader}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsElements}
      </div>
    </section>
  );
};

export default ProjectHighlights;
