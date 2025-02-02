import { Nav, Navbar, Container, Image, Stack } from "react-bootstrap";
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
];

export function Header() {
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();
  const { section } = useParams();
  const bagCheck = useSelector((state) => state.bagCheck.list);
  const location = useLocation();

  const isBookDetailsPage = location.pathname.startsWith("/books/");

  function onRouteChange(route) {
    navigate(`/section/${route}`);
  }
  return (
    <Navbar expand="lg" className={styles.navbar}>
      <Container className="ms-2 text-light" fluid>
        <Link to="/" className={styles.logo}>
          <Image
            className="mh-70 "
            fluid
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

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
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
          <Stack className="d-flex align-items-center">
            {!isBookDetailsPage && <Search />}
          </Stack>
          <Stack className=" position-relative  justify-content-center align-items-center me-5">
            {/* Coș de cumpărături */}
            <IoBagCheck
              className="fs-2 text-white ms-auto"
              onClick={() => setShowCart(true)}
            />
            <span
              className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2"
              style={{ transform: "translate(50%, -50%)" }}
            >
              {bagCheck.reduce((total, book) => total + book.quantity, 0)}
            </span>
          </Stack>
        </Navbar.Collapse>
      </Container>
      <AddToCart
        show={showCart}
        handleClose={() => setShowCart(false)} // Închide off-canvas-ul când se face click pe butonul de închidere
        bagCheck={bagCheck}
      />
    </Navbar>
  );
}
