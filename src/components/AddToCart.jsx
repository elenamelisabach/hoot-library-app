import { Offcanvas, Button, ListGroup, Stack } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeFromBagCheck } from "../redux/BagCheckSlice";
import { addToBagCheck } from "../redux/BagCheckSlice";
import { BookPrice } from "./BookPrice";
import { useNavigate } from "react-router-dom";
import { ImageCover } from "./ImageCover";

export function AddToCart({
  show,
  handleClose,
  bagCheck,
  author_name,
  price,
  title,
  key,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAddedToCart = bagCheck.some((book) => book.title === title);

  const handleRemoveItem = (title) => {
    dispatch(removeFromBagCheck(title));
  };
  const handlePlaceOrder = () => {
    if (bagCheck.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    handleClose();

    navigate("/checkout");
  };

  const addToCart = (book) => {
    const savedPrice = localStorage.getItem(`price-${book.title}`);

    const priceValue = savedPrice ? parseFloat(savedPrice) : 0;

    const bookData = {
      title: book.title,
      author_name: book.author_name,
      cover_i: book.cover_i,
      price: priceValue,
    };

    dispatch(addToBagCheck(bookData));
  };

  // Funcția de calcul al totalului
  const calculateTotal = () => {
    return bagCheck
      .reduce(
        (total, item) => total + parseFloat(item.price) * item.quantity,
        0
      )
      .toFixed(2);
  };

  const total = calculateTotal();
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart Details</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {bagCheck.length === 0 ? (
          <p>There are no items in your cart!</p>
        ) : (
          <ListGroup className="mb-3">
            {bagCheck.map((item, index) => (
              <ListGroup.Item
                key={index}
                className="d-flex flex-wrap justify-content-between align-items-center gap-2 p-2"
              >
                <ImageCover
                  imageId={item.cover_i}
                  style={{ width: "50px", height: "75px" }}
                />

                <Stack className="flex-grow-1 ms-2" style={{ minWidth: "0px" }}>
                  <h6
                    className="mb-1 text-truncate"
                    style={{
                      maxWidth: "100%",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.title}
                  </h6>
                  <p className=" text-body-secondary fst-italic small">
                    Quantity: {item.quantity}
                  </p>
                  <BookPrice title={item.title} />
                </Stack>

                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleRemoveItem(item)}
                >
                  Delete
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}

        {bagCheck.length > 0 && (
          <p className="text-end fw-bold">Total: € {total} </p>
        )}
        <Button
          onClick={handlePlaceOrder}
          variant="success"
          className="w-100 mt-3"
        >
          Place Order
        </Button>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
