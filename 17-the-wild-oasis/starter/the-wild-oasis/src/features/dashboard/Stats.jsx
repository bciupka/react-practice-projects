import { formatCurrency } from "../../utils/helpers";
import Stat from "./Stat";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineChartBar,
} from "react-icons/hi2";

function Stats({ bookings, confirmedStays, cabinsCount, numDays }) {
  const numBookings = bookings.length;
  const sales = bookings.reduce((acc, curr) => acc + curr.totalPrice, 0);
  const numStays = confirmedStays.length;
  const occupation =
    confirmedStays.reduce((acc, curr) => acc + curr.numNights, 0) /
    (numDays * cabinsCount);

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        value={numBookings}
        icon={<HiOutlineBriefcase />}
      />
      <Stat
        title="Sales"
        color="green"
        value={formatCurrency(sales)}
        icon={<HiOutlineBanknotes />}
      />
      <Stat
        title="Check ins"
        color="indigo"
        value={numStays}
        icon={<HiOutlineCalendar />}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        value={Math.round(100 * occupation) + "%"}
        icon={<HiOutlineChartBar />}
      />
    </>
  );
}

export default Stats;
