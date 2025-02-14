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
import { clearBagCheck, removeFromBagCheck } from "../../redux/BagCheckSlice";
import { OrderSummary } from "./OrderSummary";
import { BillingForm } from "./BillingForm";

export function Checkout({ cover_i }) {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const bagCheck = useSelector((state) => state.bagCheck.list);
  const dispatch = useDispatch();

  const handleRemoveItem = (title) => {
    dispatch(removeFromBagCheck({ title }));
  };

  const calculateTotal = () => {
    return bagCheck
      .reduce(
        (total, item) => total + parseFloat(item.price) * item.quantity,
        0
      )
      .toFixed(2);
  };

  const handleSubmit = (e, formData) => {
    e.preventDefault();

    if (bagCheck.length === 0) {
      alert("Your cart is empty! Add items before placing an order.");
      return;
    }
    console.log("Checkout Data:", formData, bagCheck);
    dispatch(clearBagCheck());
    setOrderPlaced(true);
  };
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center my-5 w-100">
      <Container>
        <Card className="p-4 shadow-lg w-100">
          <h2 className="text-center mb-4">Checkout</h2>

          {orderPlaced ? (
            <Container className="d-flex flex-column">
              <Container className="text-center py-5">
                <Row className="justify-content-center">
                  <Col xs={12} md={6}>
                    <Image
                      fluid
                      src="https://png.pngtree.com/png-vector/20241211/ourmid/pngtree-cute-owl-reading-a-book-clipart-illustration-png-image_14706499.png"
                      alt="Thank you"
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
                <OrderSummary
                  bagCheck={bagCheck}
                  handleRemoveItem={handleRemoveItem}
                  calculateTotal={calculateTotal}
                />
              )}
              <BillingForm handleSubmit={handleSubmit} />
            </>
          )}
        </Card>
      </Container>
    </Container>
  );
}
