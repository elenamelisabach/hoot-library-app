import { Container, Stack, Row, Col, Alert, Spinner } from "react-bootstrap";
import { BookCard } from "../components/BookCard/BookCard";
import { getBooksUrl } from "../dataBooks/books";
import { useFetch } from "../hook/useFetch";
import { useParams } from "react-router-dom";
import { LoadingSpinner } from "../components";
import { MessageAlert } from "../components/ReusableComponents/AlertMessage";

export function BookCategory({ category, query }) {
  const { section } = useParams();
  const searchQuery = query || section || category;
  const url = getBooksUrl({ query: searchQuery, subject: section || category });
  const { data, loading, error } = useFetch(url);
  const books = query ? data?.docs || [] : data?.docs?.slice(0, 4) || [];

  return (
    <Container className="mb-5">
      <h2 className="text-center my-5 category-color-text text-capitalize">
        {category}
      </h2>

      {loading ? (
        <LoadingSpinner />
      ) : books.length === 0 ? (
        <MessageAlert searchQuery={query} />
      ) : (
        <Row className="g-5">
          {books.map(({ key, ...bookProps }) => (
            <Col sm={6} md={5} lg={4} xl={3} key={key}>
              <BookCard {...bookProps} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}
