import { SocialLink } from './SocialLink';
import { Tag } from './Tag';
import { Location } from './Location';
import { Image } from './Image';

export type Profile = {
  firstName?: string,
  lastName?: string,
  position?: string,
  avatar?: Image,
  summary?: string[],
  socialLinks?: SocialLink[],
  tags?: Tag[],
  location?: Location,
};

// Timeline Entry Type
export type TimelineEntry = {
  companyName: string; // Name of the company or project
  title: string; // Job title or role
  duration: string; // Duration of the role (e.g., "Jan 2020 - Dec 2021")
  description: string; // Description of the work or responsibilities
  link?: string; // Optional link to the company or project
  linkTxt?:string; // optional otherwise will display view more
  image?: string; // Optional image URL for the entry
};
