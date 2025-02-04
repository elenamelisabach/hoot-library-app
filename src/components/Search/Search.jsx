import { Form, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { updateQuery } from "../../redux/searchSlice";
import debounce from "lodash.debounce";
import { useCallback, useState } from "react";

export function Search() {
  const query = useSelector((state) => state.search.query);
  const [text, setText] = useState(query);
  const dispatch = useDispatch();

  const debounceChange = useCallback(
    debounce((inputValue) => {
      dispatch(updateQuery(inputValue));
    }, 500),
    [dispatch]
  );

  const handleSearch = (e) => {
    const value = e.target.value;
    setText(value);
    debounceChange(value);
  };

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Form onSubmit={handleSubmit} className="d-flex  px-5">
      <Form.Control
        value={text}
        size="lg"
        type="search"
        placeholder="Search..."
        className="w-100"
        onChange={handleSearch}
      />
    </Form>
  );
}
