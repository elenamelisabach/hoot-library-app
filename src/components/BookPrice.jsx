import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { addToBagCheck } from "../redux/BagCheckSlice";
import { useDispatch } from "react-redux";

export function BookPrice({ title, book }) {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const bookKey = `price-${title}`;

    // Verifică dacă prețul este deja salvat în localStorage
    const savedPrice = localStorage.getItem(bookKey);

    if (savedPrice) {
      // Dacă prețul este salvat, îl setează în stare
      setPrice(savedPrice);
    } else {
      // Dacă prețul nu există în localStorage, generează unul aleatoriu
      const newPrice = (Math.random() * (50 - 10) + 10).toFixed(2);
      setPrice(newPrice);

      // Salvează prețul generat în localStorage
      localStorage.setItem(bookKey, newPrice);
    }
  }, [title]); // Se execută doar atunci când titlul se schimbă

  const handleAddToCart = () => {
    const savedPrice = localStorage.getItem(`price-${book.title}`);
    const bookData = {
      title: title,

      price: savedPrice || 0, // Asigură-te că prețul este corect aici
    };
    dispatch(addToBagCheck(bookData)); // Trimite acțiunea către Redux
  };

  return <Card.Subtitle className=" fs-4 text">€ {price}</Card.Subtitle>;
}
