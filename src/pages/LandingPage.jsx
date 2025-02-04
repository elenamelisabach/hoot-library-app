import { Container, Stack, Row, Col, Alert, Spinner } from "react-bootstrap";
import { CustomCarousel } from "../components/Carousel/Carousel";
import { BookCard } from "../components/BookCard/BookCard";
import { useSelector } from "react-redux";
import { getBooksUrl } from "../dataBooks/books";
import { useFetch } from "../hook/useFetch";

export function LandingPage() {
  const query = useSelector((state) => state.search.query);

  const url = getBooksUrl({ query });

  const { data, loading } = useFetch(url);
  const books = data?.docs || [];

  return (
    <Stack>
      <CustomCarousel />
      <Container className="py-5">
        <Container>
          {loading ? (
            <Stack
              direction="horizontal"
              gap={2}
              className="justify-content-center align-items-center"
              style={{ height: "200px" }}
            >
              <Spinner animation="border" role="status" />
              <span>Loading...</span>
            </Stack>
          ) : books.length === 0 ? (
            <Stack
              className="justify-content-center align-items-center text-center"
              style={{ height: "200px" }}
            >
              <Alert
                variant="warning"
                style={{ fontSize: "20px", fontWeight: "500" }}
              >
                No books found for <strong>"{query}"</strong>. Please try
                another search.
              </Alert>
            </Stack>
          ) : (
            <Row className="g-5">
              {books?.map((book) => {
                const { key: bookKey, ...props } = book;
                return (
                  <Col sm={6} md={5} lg={4} xl={3} key={bookKey}>
                    <BookCard {...props} />
                  </Col>
                );
              })}
            </Row>
          )}
        </Container>
      </Container>
    </Stack>
  );
}
