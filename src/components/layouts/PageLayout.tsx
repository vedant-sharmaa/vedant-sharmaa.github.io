import React from 'react';
import Header from '../shared/Header';
import Footer from '../shared/Footer';

type PageLayoutProps = {
  children: React.ReactNode,
};

const PageLayout = (props: PageLayoutProps): React.ReactElement | null => {
  const { children } = props;

  if (!children) {
    return null;
  }

  return (
    <main className="flex flex-col items-center">
      <div className="max-w-screen-xl self-stretch m-auto w-full">
        <Header className="px-6 sm:px-12 py-6 sticky top-0 z-50 bg-white border-b shadow-sm" />
        <article className="px-6 sm:px-12 py-6">
          {children}
        </article>
        <Footer className="px-6 sm:px-12 py-12" />
      </div>
    </main>
  );
};

export default PageLayout;
