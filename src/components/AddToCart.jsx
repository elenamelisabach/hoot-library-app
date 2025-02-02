import { Offcanvas, Button, ListGroup, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeFromBagCheck } from "../redux/BagCheckSlice";
import { addToBagCheck } from "../redux/BagCheckSlice";
import { BookPrice } from "./BookPrice";

export function AddToCart({
  show,
  handleClose,
  bagCheck,
  author_name,
  price,
  title,
  key,
  cover_i,
  workId,
}) {
  const dispatch = useDispatch();
  const isAddedToCart = bagCheck.some((book) => book.title === title);

  const handleRemoveItem = (title) => {
    dispatch(removeFromBagCheck(title));
  };
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Coșul de Cumpărături</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {bagCheck.length === 0 ? (
          <p>Coșul tău este gol.</p>
        ) : (
          <ListGroup className="d-flex justify-content-between align-items-center">
            {bagCheck.map((item, index) => (
              <ListGroup.Item key={index}>
                <BookPrice title={item.title} />
                <span>{item.title}</span>

                <Image
                  src={`https://covers.openlibrary.org/b/id/${item.cover_i}-S.jpg`}
                  alt={item.cover_i}
                  width={50}
                  height={75}
                  className="me-2"
                />
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleRemoveItem(item)}
                >
                  X
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
        <Button variant="primary" className="w-100 mt-3">
          Finalizează comanda
        </Button>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
