import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export function BillingForm({ handleSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    paymentMethod: "card",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e, formData)}>
      <h4 className="mt-4">Billing Information</h4>

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
          className="w-50 text-center mt-3 fs-5 mb-3"
        >
          Confirm Order
        </Button>
      </Col>
    </Form>
  );
}
