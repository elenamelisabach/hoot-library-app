import { Nav, Navbar, Container, Image, Row, Col } from "react-bootstrap";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoBagCheck } from "react-icons/io5";
import styles from "./Header.module.css";
import { Search } from "../Search/Search";
import { AddToCart } from "../AddToCart";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { BookDetailPage } from "../../pages";

const urls = [
  { label: "Fantasy", value: "fantasy" },
  { label: "History", value: "history" },
  { label: "Poetry", value: "poetry" },
  { label: "Science", value: "science" },
  { label: "Children", value: "children" },
  { label: "Art", value: "art" },
];

export function Header() {
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();
  const { section } = useParams();
  const bagCheck = useSelector((state) => state.bagCheck.list);
  const location = useLocation();

  const isBookDetailsPage = location.pathname.startsWith("/books/");
  const isCheckoutPage = location.pathname.startsWith("/checkout");
  const isFooterPage =
    location.pathname.startsWith("/about-us") ||
    location.pathname.startsWith("/contact");

  function onRouteChange(route) {
    navigate(`/section/${route}`);
  }
  return (
    <Navbar
      expand="lg"
      sticky="top"
      className={`${styles.navbar} flex-shrink-0`}
    >
      <Container className="ms-2 text-light" fluid>
        <Link to="/" className={styles.logo}>
          <Image
            className={styles.mh70}
            src="https://png.pngtree.com/png-vector/20240516/ourmid/pngtree-famous-owl-logos-png-image_12481418.png"
            alt="Owl"
          />
        </Link>
        <Navbar.Brand
          onClick={() => navigate("/")}
          className={`text-reset text-decoration-none ${styles.libraryName}`}
          style={{ cursor: "pointer" }}
        >
          HootLibrary
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="me-auto my-2 my-lg-0  "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {urls.map(({ value, label }) => (
              <Nav.Link
                key={value}
                className={styles.navLink}
                onClick={() => onRouteChange(value)}
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
        <Row className="flex-grow-1 w-100 ">
          <Col className="">
            {!isBookDetailsPage && !isCheckoutPage && !isFooterPage && (
              <Search />
            )}
          </Col>
        </Row>

        <Row className="align-items-center justify-content-end">
          <Col xs="auto" className="position-relative">
            <IoBagCheck
              className="fs-2 text-white ms-auto me-5"
              onClick={() => setShowCart(true)}
            />
            <span
              className="position-absolute top-0 start-50 translate-middle badge border border-light rounded-circle bg-danger p-2 "
              style={{
                transform: "translate(50%, -50%)",
              }}
            >
              {bagCheck.reduce((total, book) => total + book.quantity, 0)}
            </span>
          </Col>
        </Row>
      </Container>
      <AddToCart
        show={showCart}
        handleClose={() => setShowCart(false)}
        bagCheck={bagCheck}
      />
    </Navbar>
  );
}
