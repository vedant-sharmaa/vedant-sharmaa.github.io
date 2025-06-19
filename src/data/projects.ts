import { Projects } from '../types/Project';

export const projects: Projects = {
  channellinkup: {
    id: 'channellinkup',
    name: 'Channel Linkup',
    oURL: { url: 'https://channellinkup.com/' },
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
  ytmwrapper: {
    id: 'ytmwrapper',
    name: 'ytm-wrapper',
    srcURL: { url: 'https://github.com/vedant-sharmaa/ytm-wrapper' },
    demoURL: undefined,
    cover: { srcPath: 'projects/ytmwrapper/02-cover-cl.png' },
    startDate: '2025-07-19',
    summary: [
      'YTM-Wrapper is a simple Electron-based macOS wrapper for YouTube Music, this app allows your music to continue playing even when the app window is closed. Playback stops only when you explicitly quit the app.',
    ],
    tags: [
      { name: 'Electron' },
      { name: 'JavaScript' },
      { name: 'Node.js' },
      { name: 'macOS' },
    ],
    gitHubRepo: {
      owner: 'vedant-sharmaa',
      repo: 'ytm-wrapper',
    },
    achievements: [],
    highlight: true,
  },
};
