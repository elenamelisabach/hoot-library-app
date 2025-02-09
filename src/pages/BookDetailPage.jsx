import { useParams } from "react-router-dom";
import { useFetch } from "../hook/useFetch";
import { BookPrice } from "../components/BookPrice";
import { useDispatch, useSelector } from "react-redux";
import { ImageCover } from "../components/ImageCover";

import { getBookByIdUrl } from "../dataBooks/books";
import { addToBagCheck } from "../redux/BagCheckSlice";
import {
  Row,
  Button,
  Col,
  Container,
  Image,
  ListGroup,
  Spinner,
} from "react-bootstrap";

export function BookDetailPage() {
  const { title } = useParams();
  const dispatch = useDispatch();

  const bagCheck = useSelector((state) => state.bagCheck.list);
  const isAddedToCart = bagCheck.some((book) => book.title === title);

  const url = getBookByIdUrl({ title });
  const { data, loading } = useFetch(url);
  const book = data?.docs?.[0] || {};

  const workId = book?.key?.split("/").pop();
  const descriptionUrl = workId
    ? `https://openlibrary.org/works/${encodeURIComponent(workId)}.json`
    : null;

  const { data: workData, loading: loadingWorkData } = useFetch(descriptionUrl);

  const description =
    workData?.description?.value ||
    workData?.description ||
    "No description available";

  /*const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : "https://media.istockphoto.com/id/1093292834/vector/photo-coming-soon-picture-frame-vector-illustration.jpg?s=612x612&w=0&k=20&c=zacmLNhrQoir0Cu4ppV3F7EiDYSyZTXL59JFT2LS784=";*/

  if (loading || loadingWorkData) {
    return (
      <Container className="min-vh-100 d-flex justify-content-center align-items-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  function handleAddToCart(e) {
    e.preventDefault();
    e.stopPropagation();

    dispatch(addToBagCheck({ title }));
  }
  return (
    <Container fluid className="min-vh-100 mt-5 px-3">
      <Row className="justify-content-center align-items-center">
        <Col
          xs={12}
          md={4}
          className="d-flex justify-content-center mb-4 mb-md-0"
        >
          {/*  <Image
            src={coverUrl}
            alt={book.title}
            fluid
            className="rounded"
            style={{ maxWidth: "100%", height: "auto", maxHeight: "500px" }}
          />*/}

          <ImageCover
            imageId={book.cover_i}
            alt={book.title}
            fluid
            className="rounded"
            style={{ width: "auto", height: "auto" }}
          />
        </Col>

        <Col
          xs={12}
          md={6}
          className="d-flex flex-column justify-content-center"
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
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
