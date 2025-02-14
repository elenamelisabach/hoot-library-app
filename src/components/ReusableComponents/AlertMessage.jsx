import { Alert, Container } from "react-bootstrap";

export function MessageAlert({ searchQuery }) {
  return (
    <Container className="text-center d-flex justify-content-center mt-5">
      <Alert
        variant="warning"
        className="p-4 p-md-5  rounded shadow-lg w-75 w-md-75 w-lg-50 mx-auto"
      >
        <h1 className="fw-bold mb-3 fs-5 fs-md-4 fs-3">
          📚 Oops! No books found.
        </h1>
        <p className=" fs-5 mb-3 fs-md-6">
          We couldn't find any results for{" "}
          <strong className="d-inline-block text-truncate w-100 w-md-75">
            "{searchQuery}"
          </strong>
        </p>
        <p className="fs-6 text-muted">
          🔍 Try a different title, author, or check your spelling.
        </p>
      </Alert>
    </Container>
  );
}
