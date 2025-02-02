import { useState } from "react";
import {
  Button,
  Form,
  Col,
  Row,
  Card,
  ListGroup,
  Container,
  Stack,
  Image,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearBagCheck, removeFromBagCheck } from "../redux/BagCheckSlice";

export function Checkout({}) {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    paymentMethod: "card",
  });

  const bagCheck = useSelector((state) => state.bagCheck.list);
  const dispatch = useDispatch();

  const handleRemoveItem = (title) => {
    dispatch(removeFromBagCheck({ title }));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateTotal = () => {
    return bagCheck
      .reduce(
        (total, item) => total + parseFloat(item.price) * item.quantity,
        0
      )
      .toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Checkout Data:", formData, bagCheck);
    dispatch(clearBagCheck()); // Golește coșul după confirmare
    setOrderPlaced(true);
  };

  return (
    <Container className="my-5">
      <Card className="p-4 shadow-lg">
        <h2 className="text-center mb-4">Checkout</h2>

        {orderPlaced ? (
          <Container
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "60vh" }}
          >
            <span className="p-5  text-center">
              <h2 className="text-success">Thank You for Your Order!</h2>
              <p>
                Your order has been placed successfully. We will process it
                shortly.
              </p>
            </span>
          </Container>
        ) : (
          <>
            {bagCheck.length === 0 ? (
              <p className="text-center">Your cart is empty!</p>
            ) : (
              <>
                <h4 className="mt-3">Order Summary</h4>
                <ListGroup className="mb-3">
                  {bagCheck.map((item, index) => (
                    <ListGroup.Item
                      key={index}
                      className="d-flex align-items-center"
                    >
                      <Image
                        src={`https://covers.openlibrary.org/b/id/${item.cover_i}-S.jpg`}
                        alt="No Image"
                        width={60}
                        height={90}
                        className="me-3 rounded"
                        loading="lazy"
                      />
                      <Stack>
                        <h6 className="mb-1">{item.title}</h6>
                        <p className="text-body-secondary">
                          {item.author_name}
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
                  Total:{" "}
                  <span className="text-danger">€{calculateTotal()}</span>
                </p>
              </>
            )}

            <h4 className="mt-4">Billing Information</h4>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="email" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="address" className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Row>
                <Col>
                  <Form.Group controlId="city" className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="zip" className="mb-3">
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control
                      type="text"
                      name="zip"
                      value={formData.zip}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="paymentMethod" className="mb-3">
                <Form.Label>Payment Method</Form.Label>
                <Form.Select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                >
                  <option value="card">Credit Card</option>
                  <option value="paypal">PayPal</option>
                  <option value="cod">Cash on Delivery</option>
                </Form.Select>
              </Form.Group>
              <Col className="d-flex justify-content-center">
                <Button
                  variant="success"
                  type="submit"
                  className="w-50  text-center mt-3 fs-5 mb-3"
                >
                  Confirm Order
                </Button>
              </Col>
            </Form>
          </>
        )}
      </Card>
    </Container>
  );
}
