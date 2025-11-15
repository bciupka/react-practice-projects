import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";

export function useBookings() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });

  return { bookings: data, isLoading, error };
}
