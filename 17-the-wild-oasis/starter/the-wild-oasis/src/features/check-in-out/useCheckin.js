import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useCheckin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: checkin, isLoading: isChecking } = useMutation({
    mutationFn: ({ bookingId, breakfast = {} }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} checked-in successfully`);
      queryClient.invalidateQueries({ active: true });
      navigate("/");
    },
    onError: () => {
      toast.error("There was an error while checking-in the booking");
    },
  });

  return { checkin, isChecking };
}
