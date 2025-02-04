import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { addToBagCheck } from "../redux/BagCheckSlice";
import { useDispatch } from "react-redux";

export function BookPrice({ title, book }) {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const bookKey = `price-${title}`;

    const savedPrice = localStorage.getItem(bookKey);

    if (savedPrice) {
      setPrice(savedPrice);
    } else {
      const newPrice = (Math.random() * (50 - 10) + 10).toFixed(2);
      setPrice(newPrice);

      localStorage.setItem(bookKey, newPrice);
    }
  }, [title]);

  const handleAddToCart = () => {
    const savedPrice = localStorage.getItem(`price-${book.title}`);
    const bookData = {
      title: title,

      price: savedPrice || 0,
    };
    dispatch(addToBagCheck(bookData)); // Trimite acțiunea către Redux
  };

  return <Card.Subtitle className=" fs-4 text">€ {price}</Card.Subtitle>;
}
