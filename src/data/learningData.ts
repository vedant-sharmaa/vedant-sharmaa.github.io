import { Book, Certificate, Coursework } from '../types/Learnings';

export const certificationsData: Certificate[] = [
  {
    title: 'Problem Solving (Intermediate)',
    platform: 'HackerRank',
    date: 'June 2022',
    link: 'https://www.hackerrank.com/certificates/95c1dc0be15b',
    icon: 'https://media.licdn.com/dms/image/v2/D560BAQE8MivsmbT7Ig/company-logo_200_200/company-logo_200_200/0/1705561459405/hackerrank_logo?e=1755129600&v=beta&t=Z1MEGTny3pzDkBT-5wPEpzbg_7iGOnJ9goVcGNXgAC8',
  },
  {
    title: 'Problem Solving (Basic)',
    platform: 'HackerRank',
    date: 'June 2022',
    link: 'https://www.hackerrank.com/certificates/608a0b4de2ce',
    icon: 'https://media.licdn.com/dms/image/v2/D560BAQE8MivsmbT7Ig/company-logo_200_200/company-logo_200_200/0/1705561459405/hackerrank_logo?e=1755129600&v=beta&t=Z1MEGTny3pzDkBT-5wPEpzbg_7iGOnJ9goVcGNXgAC8',
  },
  {
    title: 'Object-Oriented Data Structures in C++',
    platform: 'Coursera',
    date: 'Sept 2021',
    link: 'https://coursera.org/share/176170dc043f2995ff0f726964668dd2',
    icon: 'https://media.licdn.com/dms/image/v2/C4D0BAQGexnfBxeEG-g/company-logo_200_200/company-logo_200_200/0/1630530042036/coursera_logo?e=1755129600&v=beta&t=8jAFuWf6uropnITIw8nHepcam1DGMSZLoAh8WwYabUs',
  },
  {
    title: 'Python (Basic)',
    platform: 'HackerRank',
    date: 'Aug 2021',
    link: 'https://www.hackerrank.com/certificates/83c7cbf978f9',
    icon: 'https://media.licdn.com/dms/image/v2/D560BAQE8MivsmbT7Ig/company-logo_200_200/company-logo_200_200/0/1705561459405/hackerrank_logo?e=1755129600&v=beta&t=Z1MEGTny3pzDkBT-5wPEpzbg_7iGOnJ9goVcGNXgAC8',
  },
  {
    title: 'Introduction to Computer Science and Programming Using Python',
    platform: 'MITx',
    date: 'Jul 2021',
    link: 'https://courses.edx.org/certificates/56a9b51d89214d1aa7c42c04a1d4ee68',
    icon: 'https://media.licdn.com/dms/image/v2/D560BAQH-UXRfIDIKug/company-logo_200_200/company-logo_200_200/0/1689799729035/mit_logo?e=1755129600&v=beta&t=IAwmWuEjIrVNOGmIQotBYl8EiMqw3XcZ-skv09vqc2o',
  },
  {
    title: 'Learning How to Learn: Powerful mental tools to help you master tough subjects',
    platform: 'Coursera',
    date: 'Jul 2021',
    link: 'https://www.coursera.org/account/accomplishments/certificate/4WLZ7MJ6MARN',
    icon: 'https://media.licdn.com/dms/image/v2/C4D0BAQGexnfBxeEG-g/company-logo_200_200/company-logo_200_200/0/1630530042036/coursera_logo?e=1755129600&v=beta&t=8jAFuWf6uropnITIw8nHepcam1DGMSZLoAh8WwYabUs',
  },
];

export const courseworkData: Coursework[] = [
  {
    title: 'Deep Learning',
    description: 'Neural networks, CNNs, RNNs, and transformers.',
    icon: 'https://example.com/deep-learning-icon.png', // Optional
  },
  {
    title: 'Data Structures',
    description: 'Covered trees, graphs, heaps, and algorithms.',
    icon: null, // Optional
  },
  {
    title: 'Cloud Computing',
    description: 'Learned AWS, Docker, and Kubernetes.',
    icon: 'https://example.com/cloud-computing-icon.png', // Optional
  },
];

export const booksData: Book[] = [
  {
    title: 'How to Win Friends and Influence People',
    author: 'Dale Carnegie',
    status: 'read',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1442726934i/4865.jpg',
    link: 'https://www.goodreads.com/book/show/4865.How_to_Win_Friends_and_Influence_People',
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    status: 'reading',
    cover: 'https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg',
    link: 'https://www.goodreads.com/book/show/40121378-atomic-habits',
  },
  {
    title: 'Siddhartha',
    author: 'Hermann Hesse',
    status: 'read',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1629378189i/52036.jpg',
    link: 'https://www.goodreads.com/book/show/52036.Siddhartha',
  },
  {
    title: 'Understanding Deep Learning',
    author: 'Simon J.D. Prince',
    status: 'reading', // Ongoing
    cover: 'https://m.media-amazon.com/images/I/41EZCiktvSL._SX342_SY445_.jpg',
    link: 'https://udlbook.github.io/udlbook/',
  },
  {
    title:
      'Speech and Language Processing: An Introduction to Natural Language Processing, Computational Linguistics and Speech Recognition',
    author: 'Dan Jurafsky, James H. Martin',
    status: 'read',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1391032539i/908047.jpg',
    link: 'https://www.goodreads.com/book/show/908047.Speech_and_Language_Processing',
  },
  {
    title: 'Computer Architecture: A Quantitative Approach',
    author: 'John L. Hennessy, David A. Patterson',
    status: 'read',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388277732i/70135.jpg',
    link: 'https://www.goodreads.com/book/show/70135.Computer_Architecture',
  },
];
