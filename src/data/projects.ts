import { Projects } from '../types/Project';

export const projects: Projects = {
  craq: {
    id: 'craq',
    name: 'CRAQ: High Throughput Storage System',
    srcURL: { url: 'https://github.com/vedant-sharmaa/projs/tree/main/CRAQ%3A%20High%20Throughput%20Storage%20System' },
    demoURL: undefined,
    cover: { srcPath: 'projects/craq3.png' },
    startDate: '2024-10-10',
    summary: [
      'A strongly-consistent distributed key-value store based on CRAQ (Chain Replication with Apportioned Queries), inspired by the USENIX paper - CRAQ: A Distibuted Object-Storage System.',
    ],
    tags: [
      { name: 'Python3' },
      { name: 'Distributed Systems' },
    ],
    gitHubRepo: {
      owner: 'vedant-sharmaa',
      repo: 'projs',
    },
    achievements: [],
    highlight: true,
  },
  chandy_lamport: {
    id: 'chandy_lamport',
    name: 'Resilient Stream Processing Engine',
    srcURL: { url: 'https://github.com/vedant-sharmaa/projs/tree/main/Resilient%20Stream%20Processing%20Engine' },
    demoURL: undefined,
    cover: { srcPath: 'projects/system.png' },
    startDate: '2024-09-10',
    summary: [
      'A high-performance distributed word-counting system modeled after Apache Flink. It implements asynchronous, consistent global snapshots using the Chandy-Lamport algorithm to ensure exact-state recovery in the event of worker failures.',
    ],
    tags: [
      { name: 'Python3' },
      { name: 'Redis' },
      { name: 'Sockets' },
    ],
    gitHubRepo: {
      owner: 'vedant-sharmaa',
      repo: 'projs',
    },
    achievements: [],
    highlight: true,
  },
  mapreduce: {
    id: 'mapreduce',
    name: 'Scalable MapReduce Engine',
    srcURL: { url: 'https://github.com/vedant-sharmaa/projs/tree/main/Scalable%20MapReduce%20Engine' },
    demoURL: undefined,
    cover: { srcPath: 'projects/mapreduce.png' },
    startDate: '2024-08-10',
    summary: [
      'A robust, distributed word count application designed to simulate a multi-node system using Python processes and Redis.',
    ],
    tags: [
      { name: 'Python3' },
      { name: 'Redis' },
      { name: 'Docker' },
    ],
    gitHubRepo: {
      owner: 'vedant-sharmaa',
      repo: 'projs',
    },
    achievements: [],
    highlight: true,
  },
  channellinkup: {
    id: 'channellinkup',
    name: 'Channel Linkup',
    // oURL: { url: 'https://channellinkup.com/' },
    demoURL: { url: 'https://drive.google.com/file/d/1Nj3Na7YwrfStrO17c7Keo8ht0zV9bGJx/view' },
    cover: { srcPath: 'projects/channellinkup/02-cover-cl.png' },
    startDate: '2024-06-01',
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
