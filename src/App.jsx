import "./App.css";
import { LandingPage, SectionPage, BookDetailPage } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Footer, AboutUs, Contact } from "./components";
import { Header } from "./components/Header/Header";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Checkout } from "./pages";

function App() {
  return (
    <Provider store={store}>
      <Container fluid className="p-0 d-flex flex-column min-vh-100">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/section/:section" element={<SectionPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/books/:title" element={<BookDetailPage />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Container>
    </Provider>
  );
}

export default App;
