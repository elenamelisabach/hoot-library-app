import { Card, Button, Container, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BookPrice } from "../BookPrice";
import { useDispatch, useSelector } from "react-redux";
import { addToBagCheck } from "../../redux/BagCheckSlice";
import { ImageCover } from "../ImageCover";

export function BookCard({ author_name, cover_i, title, subject, key, price }) {
  const dispatch = useDispatch();
  const bagCheck = useSelector((state) => state.bagCheck.list);
  const isAddedToCart = bagCheck.some((book) => book.title === title);

  function handleAddToCart(e) {
    e.preventDefault();
    e.stopPropagation();

    dispatch(addToBagCheck({ title, author_name, cover_i, price, key }));
  }

  return (
    <Link
      to={`/books/${encodeURIComponent(title)}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Card className="w-100 h-100 d-flex flex-column justify-content-center align-items-center mb-4 shadow-lg shadow-transition p-3 mb-5 bg-white rounded">
        {/* <Card.Img className="card-img mt-4" variant="top" src={coverUrl} />*/}
        <ImageCover
          className="card-img mt-4"
          variant="top"
          imageId={cover_i}
          style={{ width: "180px", height: "270px" }}
        />
        <Card.Body>
          <Card.Title className="mb-3 d-flex justify-content-center align-items-center">
            {title}
          </Card.Title>
          <Card.Subtitle className=" mb-2 text-muted">
            Author: {author_name?.slice(0, 2).join(", ")}
            {author_name?.length > 2 && " ..."}
          </Card.Subtitle>
          <Card.Text>{subject}</Card.Text>
        </Card.Body>
        <Stack className="text-center">
          <BookPrice title={title} className="mb-3 " />
        </Stack>
        <Button onClick={handleAddToCart} variant="success" className="mb-4">
          Add to basket
        </Button>
      </Card>
    </Link>
  );
}
