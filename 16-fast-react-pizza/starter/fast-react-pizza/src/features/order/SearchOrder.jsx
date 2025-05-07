import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  function handleSumbit(e) {
    e.preventDefault();
    setQuery("");
    navigate(`/order/${query}`);
  }
  return (
    <form onSubmit={handleSumbit}>
      <input
        placeholder="Search order number"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
