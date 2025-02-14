import { ListGroup, Button, Stack } from "react-bootstrap";
import { ImageCover } from "../../components/ImageCover";

export function OrderSummary({ bagCheck, handleRemoveItem, calculateTotal }) {
  return (
    <>
      <h4 className="mt-3">Order Summary</h4>
      <ListGroup className="mb-3">
        {bagCheck.map((item, index) => (
          <ListGroup.Item key={index} className="d-flex align-items-center">
            <ImageCover
              imageId={item.cover_i}
              style={{ width: "60px", height: "90px" }}
              className="me-3 rounded"
            />
            <Stack className="ms-3">
              <h6 className="mb-1">{item.title}</h6>
              <p className="text-body-secondary">
                {item.author_name?.slice(0, 2).join(", ")}
                {item.author_name?.length > 2 && " ..."}
              </p>
              <p className="fw-bold text-success">
                €{item.price} x {item.quantity}
              </p>
            </Stack>
            <Button
              variant="danger"
              className="ms-auto"
              onClick={() => handleRemoveItem(item.title)}
            >
              Remove
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <p className="fw-bold text-end fs-5">
        Total: <span className="text-danger">€{calculateTotal()}</span>
      </p>
    </>
  );
}
