import { Profile, TimelineEntry } from '../types/Profile';
import { socialLinks } from './socialLinks';
import amazonLogo from '../images/logos/amazon_logo.jpeg';
import iitdLogo from '../images/logos/iitd_logo.png';
import paytmLogo from '../images/logos/paytm_logo.jpeg';

export const profile: Profile = {
  firstName: 'Vedant',
  lastName: 'Sharma',
  position: "M.S. Computer Science and Engineering @ IIT Delhi",
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
      'Pursuing advanced coursework in parallel programming, deep learning, cloud computing, and high-performance computer architecture at IIT Delhi.',
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
      'Contributed to Alexa AI-Natural Understanding team by building and automating NU model pipelines on a containerized AWS-based infrastructure using Python and Docker.',
    // link: "https://www.amazon.de",
    // linkTxt:"visit",
    image:
      amazonLogo,
  },
  {
    companyName: 'Paytm',
    title: 'Software Engineer',
    duration: 'June 2022 - Nov 2022',
    description:
      'Built and optimized Paytm’s Payments Gateway logging system, enabling real-time monitoring and rapid failure detection at massive scale.',
    // link: "https://paytm.com/",
    // linkTxt:"visit",
    image:
      paytmLogo,
  },
  {
    companyName: 'Paytm',
    title: 'Software Engineer Intern',
    duration: 'Jan 2022 - June 2022',
    description:
      'Developed Hibernate-based APIs and contributed to system design and microservices architecture during internship.',
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
      'https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/National_Institute_of_Technology%2C_Hamirpur_Logo.png/220px-National_Institute_of_Technology%2C_Hamirpur_Logo.png',
  },
];
