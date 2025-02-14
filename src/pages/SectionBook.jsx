import { Stack, Container, Alert, Row, Col, Spinner } from "react-bootstrap";
import { BookCard, LoadingSpinner } from "../components";
import { useSelector } from "react-redux";
import { MessageAlert } from "../components";
import { useFetch } from "../hook/useFetch";
import { getBooksUrl } from "../dataBooks/books";
import { useParams } from "react-router-dom";

export function SectionPage() {
  const { section } = useParams();
  const query = useSelector((state) => state.search.query);
  const searchQuery = query || section;
  const url = getBooksUrl({ query: searchQuery, subject: section });

  const { data, loading } = useFetch(url);
  const books = data?.docs || [];

  return (
    <Stack>
      <Container className="py-5">
        <Container>
          {loading ? (
            <LoadingSpinner />
          ) : books.length === 0 ? (
            <MessageAlert searchQuery={query} />
          ) : (
            <Row className="g-5">
              {books?.map((book) => {
                const { key: bookKey, ...props } = book;
                return (
                  <Col sm={6} md={5} lg={4} xl={3} key={book.key}>
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
