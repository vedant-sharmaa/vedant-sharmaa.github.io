import { Profile, TimelineEntry } from '../types/Profile';
import { socialLinks } from './socialLinks';
import amazonLogo from '../images/logos/amazon_logo.jpeg';
import iitdLogo from '../images/logos/iitd_logo.png';
import paytmLogo from '../images/logos/paytm_logo.jpeg';
import nithLogo from '../images/logos/nith_alumni_logo.jpeg';

export const profile: Profile = {
  firstName: 'Vedant',
  lastName: 'Sharma',
  position: 'M.S. Computer Science and Engineering @ IIT Delhi',
  summary: ['Software Developer | AI & Systems Researcher'],
  avatar: {
    srcPath: 'profile/avataar_fullxfull.jpeg',
    caption: 'Vedant Sharma',
  },
  location: {
    name: 'New Delhi, India',
  },
  tags: [
    { name: 'Full Stack' },
    { name: 'Deep Learning' },
    { name: 'React' },
    { name: 'Django' },
    { name: 'Python' },
    { name: 'JavaScript' },
    { name: 'C++' },
  ],
  socialLinks,
};

export const timelineEntries: TimelineEntry[] = [
  {
    companyName: 'Indian Institute of Technology Delhi',
    title: 'M.S. in Computer Science',
    duration: 'July 2024 - May 2026',
    description:
      'Pursuing advanced coursework in parallel programming, deep learning, cloud computing, and high-performance computer architecture at IIT Delhi. Twice awarded the title of <a href="https://homecse.iitd.ac.in/cse-iit-delhi-ta-award/" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-semibold bg-blue-50 px-1 py-0.5 rounded hover:bg-blue-100 hover:text-blue-800 transition-colors">Outstanding Teaching Assistant</a> for COL380: Introduction to Parallel & Distributed Programming and COL106: Data Structures and Algorithms.',
    link: 'https://www.iitd.ac.in',
    linkTxt: 'Visit',
    image:
      iitdLogo,
  },
  {
    companyName: 'Amazon',
    title: 'SDE Intern',
    duration: 'Nov 2022 - May 2023',
    description:
      'Contributed to Alexa AI-Natural Understanding team by building and automating NLU model pipelines on a containerized AWS-based infrastructure using Python and Docker.',
    link: 'https://www.amazon.de',
    linkTxt: 'Visit',
    image:
      amazonLogo,
  },
  {
    companyName: 'Paytm',
    title: 'Software Engineer',
    duration: 'June 2022 - Nov 2022',
    description:
      'Built and optimized Paytm’s Payments Gateway logging system, enabling real-time monitoring and rapid failure detection at massive scale.',
    link: 'https://paytm.com/',
    linkTxt: 'Visit',
    image:
      paytmLogo,
  },
  {
    companyName: 'Paytm',
    title: 'Software Engineer Intern',
    duration: 'Jan 2022 - June 2022',
    description:
      'Developed Hibernate-based APIs and contributed to system design and microservices architecture during internship.',
    link: 'https://paytm.com/',
    linkTxt: 'Visit',
    image:
      paytmLogo,
  },
  {
    companyName: 'National Institute of Technology Hamirpur',
    title: 'B.Tech. in Electrical Engineering',
    duration: 'Jul 2018 - Jun 2022',
    description:
      'Focused on neural networks, statistics and signal processing. Served as Coordinator of Team Public Relations, managing communications and outreach',
    link: 'https://nith.ac.in',
    linkTxt: 'Visit',
    image:
      nithLogo,
  },
];
