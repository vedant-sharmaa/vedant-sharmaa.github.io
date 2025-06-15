import React from 'react';
import HyperLink from './HyperLink';
import type { Link } from '../../types/Link';
import { routes } from '../../constants/routes';

const Greeting = (): React.ReactElement => {
  const projectsLink: Link = {
    url: `${routes.projects.path}/`,
  };

  const projectsLinkElement = (
    <span className="inline-block">
      <HyperLink link={projectsLink} className="underline font-semibold">
        projects
      </HyperLink>
    </span>
  );

  return (
    <div>
      <p className="font-light text-justify">
        Hi there! I&apos;m <strong>Vedant Sharma</strong>, a passionate{' '}
        <strong>Master&apos;s in Computer Science</strong> student at{' '}
        <strong>IIT Delhi</strong>, specializing in{' '}
        <strong>Artificial Intelligence</strong> and <strong>Systems Research. </strong>
        My journey spans {' '}<strong>full-stack development</strong>,
        <strong> cloud computing</strong>, <strong>deep learning</strong>, and
        <strong>freelancing</strong>,
        with hands-on experience at <strong>Amazon</strong> and <strong>Paytm</strong>.
        Explore my {projectsLinkElement}{' '}
        to learn more about my work. I&apos;m always eager to explore new ideas,
        solve complex problems, and keep learning.{' '}
      </p>
    </div>
  );
};

export default Greeting;
