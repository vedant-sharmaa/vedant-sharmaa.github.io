import type { Link } from './Link';

export const socialLinkTypes = {
  devTo: 'DevTo',
  facebook: 'Facebook',
  gitHub: 'GitHub',
  instagram: 'Instagram',
  linkedIn: 'LinkedIn',
  medium: 'Medium',
  stackOverflow: 'StackOverflow',
  twitter: 'Twitter',
  youTube: 'YouTube',
  leetcode: 'Leetcode',
  upwork: 'Upwork',
};

type socialLinkTypesKeys = keyof typeof socialLinkTypes;
type socialLinkTypesValues = typeof socialLinkTypes[socialLinkTypesKeys];

export interface SocialLink extends Link {
  type?: socialLinkTypesValues,
  secondary?: boolean,
  hidden?: boolean,
}
