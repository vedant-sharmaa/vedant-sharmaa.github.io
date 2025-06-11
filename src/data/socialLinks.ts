// @flow
import { socialLinkTypes } from '../types/SocialLink';
import type { SocialLink } from '../types/SocialLink';

export const socialLinks: SocialLink[] = [
  {
    type: socialLinkTypes.linkedIn,
    url: 'https://www.linkedin.com/in/vedant-sharma-5855621a5/',
    secondary: false,
    caption: 'Vedant Sharma on LinkedIn',
  },
  {
    type: socialLinkTypes.gitHub,
    url: 'https://github.com/vedant-sharmaa',
    secondary: false,
    caption: 'Vedant Sharma on GitHub',
  },
  {
    type: socialLinkTypes.upwork,
    url: 'https://www.upwork.com/freelancers/~0138793d3e9f4389dc',
    secondary: false,
    caption: 'Vedant Sharma on Leetcode',
  },
];
