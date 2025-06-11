import { Projects } from '../types/Project';

export const projects: Projects = {
  'channellinkup': {
    id: 'channellinkup',
    name: 'Channel Linkup',
    srcURL: { url: 'https://channellinkup.com/' },
    demoURL: { url: 'https://drive.google.com/file/d/1Nj3Na7YwrfStrO17c7Keo8ht0zV9bGJx/view' },
    cover: { srcPath: 'projects/channellinkup/02-cover-cl.png' },
    startDate: '2024-07-01',
    summary: [
      'Channel Linkup is a collaboration platform that streamlines video editing workflows for YouTubers and content creators.',
    ],
    tags: [
      { name: 'React' },
      { name: 'Django' },
      { name: 'AWS' },
      { name: 'GCP' },
      { name: 'SQL' },
      { name: 'Python' },
      { name: 'JavaScript' },
    ],
    achievements: [],
    highlight: true,
  },
};
