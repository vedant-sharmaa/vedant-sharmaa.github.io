import React from 'react';
import LearningScreen from '../components/screens/LearningScreen';
import { booksData, certificationsData } from '../data/learningData';

const Learning = (): React.ReactElement => {
  return <LearningScreen certifications={certificationsData} books={booksData} />;
};

export default Learning;
