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
        className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
        placeholder="Search order number"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
