import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <div className="flex items-center justify-between border-b border-stone-300 bg-yellow-400 px-4 py-3 uppercase sm:p-6 sm:px-6">
      <Link className="tracking-[5px]" to="/">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </div>
  );
}

export default Header;
