import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { addToBagCheck } from "../redux/BagCheckSlice";
import { useDispatch } from "react-redux";

export function BookPrice({ title }) {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const bookKey = `price-${title}`;

    // Verifică dacă prețul este deja salvat în localStorage
    const savedPrice = localStorage.getItem(bookKey);

    if (savedPrice) {
      // Dacă prețul este salvat, îl setează în stare
      setPrice(savedPrice);
      console.log("Preț extras din localStorage:", savedPrice);
    } else {
      // Dacă prețul nu există în localStorage, generează unul aleatoriu
      const newPrice = (Math.random() * (100 - 10) + 10).toFixed(2);
      setPrice(newPrice);

      // Salvează prețul generat în localStorage
      localStorage.setItem(bookKey, newPrice);
      console.log("Preț salvat în localStorage:", newPrice);
    }
  }, [title]); // Se execută doar atunci când titlul se schimbă

  const handleAddToCart = () => {
    if (!price) {
      console.log("Prețul este necunoscut!");
      return;
    }
    dispatch(addToBagCheck({ title, price }));
    console.log("Adăugat în coș:", { title, price });
  };

  return <Card.Subtitle className=" fs-4 text">€ {price}</Card.Subtitle>;
}
