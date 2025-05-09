import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-stone-800 px-4 py-3 text-sm uppercase text-stone-200 sm:p-6 sm:px-6 md:text-base">
      <p className="space-x-4 text-stone-300 sm:space-x-6">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
