import React from 'react';

const BlogFooter = (): React.ReactElement | null => {
  return (
    <div className="mt-16 text-center">
      <p className="text-lg text-gray-700 font-light">
        You have reached the end of the blog. Thanks for reading!
      </p>
      <p className="text-md text-gray-600 mt-2">
        For any queries or issues, feel free to reach out to me via the{' '}
        <a href="/contact" className="text-blue-500 hover:underline">
          contact page
        </a>
        .
      </p>
    </div>
  );
};

export default BlogFooter;
