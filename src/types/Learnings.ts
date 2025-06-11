// Certificate Type
export type Certificate = {
  title: string; // Title of the certification
  platform: string; // Platform where the certification is from (e.g., Coursera, edX)
  date: string; // Date when the certification was obtained
  link?: string | null; // Optional link to the certification
  icon?: string | null; // Optional icon URL
};

// Coursework Type
export type Coursework = {
  title: string; // Title of the coursework/subject
  description: string; // Description of what was covered in the coursework
  icon?: string | null; // Optional icon URL
};

// Book Type
export type Book = {
  title: string; // Title of the book
  author: string; // Author of the book
  status: 'read' | 'reading'; // Reading status (read or currently reading)
  cover?: string | null; // Optional cover image URL
  link?: string | null; // Optional link to more information about the book
};
