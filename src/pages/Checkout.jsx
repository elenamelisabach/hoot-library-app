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
import { ImageCover } from "../components";

export function Checkout({ cover_i }) {
  console.log(cover_i);
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
    dispatch(clearBagCheck());
    setOrderPlaced(true);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center my-5 w-100">
      <Container>
        <Card className="p-4 shadow-lg">
          <h2 className="text-center mb-4">Checkout</h2>

          {orderPlaced ? (
            <Container className="d-flex flex-column min-vh-100">
              <Container className="text-center py-5">
                <Row>
                  <Col xs={12} md={6}>
                    <Image
                      fluid
                      src="https://png.pngtree.com/png-vector/20241211/ourmid/pngtree-cute-owl-reading-a-book-clipart-illustration-png-image_14706499.png"
                      className="order-img"
                    />
                  </Col>
                  <Col xs={12} md={6} className="py-5">
                    <h1 className="text-success mb-4 fs-1 fs-md-2 fs-lg-3">
                      Thank You for Your Order!
                    </h1>
                    <p className="lead text-muted mb-5 fs-responsive">
                      We appreciate your business! Your order is being processed
                      and will be shipped soon. A confirmation email has been
                      sent to you.
                    </p>
                  </Col>
                </Row>
                <Button
                  xs={12}
                  md={6}
                  variant="success"
                  size="lg"
                  href="/"
                  className="px-5 py-2 mt-5"
                >
                  Return to Home Page
                </Button>
              </Container>
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
                        <ImageCover
                          imageId={cover_i}
                          alt="No Image"
                          width={60}
                          height={90}
                          className="me-3 rounded"
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
                    className="w-50"
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
                    className="w-50"
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
                    className="w-25"
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
    </Container>
  );
}
