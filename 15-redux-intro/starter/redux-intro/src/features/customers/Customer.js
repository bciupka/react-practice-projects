import { useSelector } from "react-redux";

function Customer() {
  const consumer = useSelector((store) => store.customer.fullName);

  return <h2>👋 Welcome, {consumer}</h2>;
}

export default Customer;
