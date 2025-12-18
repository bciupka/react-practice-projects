import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getBookingsAfterDate } from "../../services/apiBookings";

function useRecentBookigs() {
  const [searchParams] = useSearchParams();
  const numDays = !searchParams.get("last") ? "7" : +searchParams.get("last");

  const queryDate = subDays(new Date(), numDays).toISOString();

  const { data, isLoading } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDate),
    queryKey: ["bookings", `last-${numDays}`],
  });

  return { bookings: data, isLoading };
}

export default useRecentBookigs;
