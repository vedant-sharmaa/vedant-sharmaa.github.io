import React from 'react';
import Row from '../shared/Row';
import PageHeader from '../shared/PageHeader';
import Badge from '../shared/Badge';
import BookCard from '../shared/BookCard';
import { Book } from '../../types/Learnings';

type BookshelfProps = {
  books: Book[];
}

const Bookshelf = (props: BookshelfProps): React.ReactElement => {
  const { books } = props;
  return (
    <section className="mb-12">
      <Row>
        <PageHeader>My Bookshelf</PageHeader>
        <Badge className="ml-3 self-start">{books.length}</Badge>
      </Row>
      <p className="text-gray-600 mb-8 text-sm">
        Explore books I&apos;ve read and the ones I&apos;m currently reading.
      </p>
      <div className="flex flex-col items-start px-4">
        {/* Bookshelf Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-5xl">
          {books.map((book) => (
            <BookCard key={book.title} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bookshelf;
