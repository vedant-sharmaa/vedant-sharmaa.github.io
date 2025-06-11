import React from 'react';
import { FiExternalLink } from '@react-icons/all-files/fi/FiExternalLink';
import { FiBriefcase } from '@react-icons/all-files/fi/FiBriefcase';
import { TimelineEntry } from '../../types/Profile';

type TimelineProps = {
  entries: TimelineEntry[];
};

const Timeline: React.FC<TimelineProps> = ({ entries }) => {
  return (
    <div className="relative w-full max-w-4xl mx-auto my-12">
      {/* Vertical Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300 md:block hidden" />

      {/* Present Label */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 text-gray-500 font-medium md:block hidden">
        Present
      </div>

      {/* Timeline Entries */}
      {entries.map((entry, index) => {
        const isRightSide = index % 2 === 0; // Alternate sides for larger screens

        return (
          <div
            key={entry.description}
            className={`flex items-center w-full mb-8 ${
              isRightSide ? 'md:justify-start' : 'md:justify-end'
            } justify-start text-justify`} // On small screens, all entries are aligned to the left
          >
            {/* Content Block */}
            <div
              className={`relative w-full md:w-5/12 p-4 bg-white shadow-md rounded-lg ${
                isRightSide ? 'md:mr-8' : 'md:ml-8'
              }`}
            >
              {/* Image or Icon */}
              <div className="flex items-center mb-3">
                {entry.image ? (
                  <img
                    src={entry.image}
                    alt={entry.companyName}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                ) : (
                  <FiBriefcase className="w-12 h-12 text-gray-500 mr-3" />
                )}
                <div>
                  <h3 className="font-semibold text-lg">{entry.companyName}</h3>
                  <p className="text-sm text-gray-500">{entry.title}</p>
                  <p className="text-sm text-gray-400">{entry.duration}</p>
                </div>
              </div>
              <p className="text-sm">{entry.description}</p>
              {entry.link && (
                <a
                  href={entry.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center text-blue-500 hover:underline"
                >
                  <FiExternalLink className="mr-1" />
                  {entry.linkTxt ? entry.linkTxt : 'View More'}
                </a>
              )}
            </div>

            {/* Circle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full md:block hidden" />
          </div>
        );
      })}

      {/* 2018 Label */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-2rem] text-gray-500 font-medium md:block hidden">
        2018
      </div>
    </div>
  );
};

export default Timeline;
