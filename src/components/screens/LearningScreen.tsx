import React from 'react';
import Certifications from '../elements/Certifications';
import Bookshelf from '../elements/Bookshelf';
import ErrorBoundary from '../shared/ErrorBoundary';
import SEO from '../shared/SEO';
import PageLayout from '../layouts/PageLayout';
import { Book, Certificate } from '../../types/Learnings';

type LearningScreenProps = {
  books: Book[];
  certifications: Certificate[];
}

const LearningScreen = (props: LearningScreenProps): React.ReactElement => {
  const { books, certifications } = props;
  return (
    <PageLayout>
      <SEO
        title={"Vedant's Learning Journey"}
        description="This page captures all the certifications, books, and coursework that Vedant has covered on his learning journey."
      />
      <ErrorBoundary>
        {/* Certifications Section */}
        <Certifications certifications={certifications} />

        {/* Coursework Section */}
        {/* <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Coursework
          </h2>
          <Coursework />
        </section> */}

        {/* Bookshelf Section */}
        <Bookshelf books={books} />
      </ErrorBoundary>
    </PageLayout>
  );
};

export default LearningScreen;
