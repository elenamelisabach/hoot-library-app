import { Spinner, Stack } from "react-bootstrap";

export function LoadingSpinner() {
  return (
    <Stack
      className="justify-content-center align-items-center"
      style={{ height: "200px", gap: "10px" }}
    >
      <Spinner
        animation="border"
        role="status"
        variant="success"
        style={{ width: "48px", height: "48px" }}
      />
      <span className="">Loading...</span>
    </Stack>
  );
}
