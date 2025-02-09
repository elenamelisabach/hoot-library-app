import { Container, Stack, Row, Col, Alert, Spinner } from "react-bootstrap";
import { CustomCarousel } from "../components/Carousel/Carousel";
import { BookCard } from "../components/BookCard/BookCard";
import { useSelector } from "react-redux";
import { getBooksUrl } from "../dataBooks/books";
import { useFetch } from "../hook/useFetch";

export function BookCategory({ category, query }) {
  const url = getBooksUrl({ query: query || category, subject: category });
  const { data, loading, error } = useFetch(url);
  const books = data?.docs?.slice(0, 4) || [];

  return (
    <Container className="mb-5">
      <h2 className="text-center my-5 category-color-text">
        {category.toUpperCase()}
      </h2>

      {loading ? (
        <Stack
          className="justify-content-center align-items-center"
          style={{ height: "200px" }}
        >
          <Spinner animation="border" role="status" />
          <span>Loading...</span>
        </Stack>
      ) : books.length === 0 ? (
        <Alert variant="warning" className="text-center">
          No books found for "{query || category}".
        </Alert>
      ) : (
        <Row className="g-5">
          {books.map((book) => (
            <Col sm={6} md={5} lg={4} xl={3} key={book.key}>
              <BookCard {...book} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}
