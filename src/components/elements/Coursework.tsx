import React from 'react';
import { courseworkData } from '../../data/learningData';

const Coursework = (): React.ReactElement => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
      {courseworkData.map((course) => (
        <div
          key={course.title}
          className="p-4 bg-white rounded-lg shadow hover:shadow-md transition"
        >
          <div className="flex items-center mb-4">
            {course.icon ? (
              <img
                src={course.icon}
                alt={`${course.title} icon`}
                className="w-8 h-8 mr-4"
              />
            ) : (
              <div className="w-8 h-8 bg-gray-300 rounded-full mr-4" />
            )}
            <h3 className="text-lg font-medium text-gray-800">
              {course.title}
            </h3>
          </div>
          <p className="text-sm text-gray-500">{course.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Coursework;
