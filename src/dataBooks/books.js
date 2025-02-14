const serverAddress = "https://openlibrary.org";

export const getBooksUrl = ({
  query,
  subject,
  fields = "key,title,author_name,first_publish_year,cover_i,number_of_pages,publishers,work_key",
  limit = 100,
  page = 1,
}) =>
  `${serverAddress}/search.json?q=${encodeURIComponent(
    query
  )}&subject=${encodeURIComponent(
    subject
  )}&fields=${fields}&limit=${limit}&page=${page}&jscmd=details`;

export const getBookByIdUrl = ({ title }) =>
  `${serverAddress}/search.json?title=${encodeURIComponent(
    title
  )}&jscmd=details&limit=1`;
