import { useParams } from "react-router-dom";
import { useFetch } from "../hook/useFetch";
import { BookPrice } from "../components/BookPrice";
import { useDispatch, useSelector } from "react-redux";
import { ImageCover } from "../components/ImageCover";
import { LoadingSpinner } from "../components";
import { getBookByIdUrl } from "../dataBooks/books";
import { useState } from "react";
import { addToBagCheck } from "../redux/BagCheckSlice";
import { Row, Button, Col, Container, ListGroup } from "react-bootstrap";

export function BookDetailPage() {
  const { title } = useParams();
  const dispatch = useDispatch();
  const [showMessage, setShowMessage] = useState(false);
  const url = getBookByIdUrl({ title });

  const { data, loading } = useFetch(url);
  const book = data?.docs?.[0] || {};

  const bagCheck = useSelector((state) => state.bagCheck.list);
  const isAddedToCart = bagCheck.some((book) => book.title === title);

  const workId = book.key?.split("/").pop() || null;

  const descriptionUrl = workId
    ? `https://openlibrary.org/works/${workId}.json?format=json&jscmd=details`
    : null;

  const { data: workData, loading: loadingWorkData } = useFetch(
    descriptionUrl ?? ""
  );
  const description =
    workData?.description?.value ||
    workData?.description ||
    "No description available";

  if (loading) {
    return <LoadingSpinner />;
  }

  function handleAddToCart(e) {
    e.preventDefault();
    e.stopPropagation();

    dispatch(addToBagCheck({ title: book.title, cover_i: book.cover_i }));
    setShowMessage(true);

    setTimeout(() => setShowMessage(false), 2000);
  }
  return loading ? (
    <LoadingSpinner />
  ) : (
    <Container fluid className="my-5 px-3">
      <Row className="justify-content-center align-items-center">
        <Col
          xs={10}
          sm={8}
          md={5}
          lg={3}
          className="d-flex justify-content-center mb-4 mb-md-0"
        >
          <ImageCover
            imageId={book.cover_i}
            fluid
            className="rounded img-fluid"
            style={{ width: "75%", height: "auto" }}
          />
        </Col>

        <Col
          xs={12}
          md={6}
          className="d-flex flex-column justify-content-center text-center text-md-start"
        >
          <h1 className="text-center mb-4 fs-3 fs-md-2 fs-lg-1 fw-bold">
            {book.title}
          </h1>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>Author(s): </strong>
              {book.author_name?.join(", ") || "Unknown"}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>First Published: </strong>
              {book.first_publish_year || "Unknown"}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Language: </strong>
              {book.language?.join(", ") || "Unknown"}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Edition Count: </strong> {book.edition_count || "N/A"}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Description:</strong>
              <p className="text-wrap mb-0 text-muted">
                {description || "No description available."}
              </p>
            </ListGroup.Item>
            <Row className="mt-3">
              <Col className="text-end">
                <BookPrice title={title} />
              </Col>
            </Row>
          </ListGroup>
          <Row className="justify-content-center mt-4">
            <Col xs={12} sm={8} md={6} lg={4}>
              <Button
                onClick={handleAddToCart}
                variant="success"
                className="w-100 p-2 mb-2 rounded"
              >
                Add to basket
              </Button>
              {showMessage && (
                <p className="mt-2 p-2 text-center text-success fw-medium">
                  Added to cart!
                </p>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
