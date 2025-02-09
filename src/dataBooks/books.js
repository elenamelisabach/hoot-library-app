const serverAddress = "https://openlibrary.org";

export const getBooksUrl = ({
  query,
  subject,
  fields = "key,title,author_name,first_publish_year,cover_i,number_of_pages,publishers",
  limit = 100,
  page = 1,
  works,
  key,
  id,
  bookId,
}) =>
  `${serverAddress}/search.json?q=${encodeURIComponent(
    query
  )}&subject=${encodeURIComponent(
    subject
  )}&fields=${fields}&limit=${limit}&page=${page}&jscmd=details`;

export const getBookByIdUrl = ({ title }) =>
  `https://openlibrary.org/search.json?title=${encodeURIComponent(
    title
  )}&jscmd=details&limit=1`;
