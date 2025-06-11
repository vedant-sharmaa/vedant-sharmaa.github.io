import React from 'react';
import { Book } from '../../types/Learnings';

type BookCardProps = {
    book: Book;
};

const BookCard = (props: BookCardProps): React.ReactElement | null => {
  const { book } = props;

  // book meta data
  const bookLinkMeta = book.link ? book.link : '';
  const bookTitleMeta = book.title;
  const bookCoverMeta = book.cover;
  const bookAuthorMeta = book.author;
  const bookStatusMeta = book.status;

  const bookBorder = bookStatusMeta === 'reading' ? 'border-2 border-blue-500' : '';
  const bookCover = bookCoverMeta ? (
    <img
      src={bookCoverMeta}
      alt={bookTitleMeta}
      className="w-full h-full object-cover"
    />
  ) : (
    <div className="flex items-center justify-center h-full text-gray-400">
      No Cover Available
    </div>
  );

  const bookTitle = <h3 className="text-lg font-medium text-gray-800">{bookTitleMeta}</h3>;
  const bookAuthor = <p className="text-sm text-gray-500">{bookAuthorMeta}</p>;
  const bookStatus = bookStatusMeta === 'reading' && (
    <p className="mt-2 text-sm font-semibold text-blue-500">
      Currently Reading
    </p>
  );

  return (
    <a
      key={bookTitleMeta}
      href={bookLinkMeta}
      target="_blank"
      rel="noopener noreferrer"
      className={`group p-4 bg-white rounded-lg shadow hover:shadow-md transition ${bookBorder}`}
    >
      {/* Book Cover */}
      <div className="w-full h-48 mb-4 rounded-md overflow-hidden">
        {bookCover}
      </div>

      {/* Book Info */}
      {bookTitle}
      {bookAuthor}
      {bookStatus}
    </a>
  );
};

export default BookCard;
