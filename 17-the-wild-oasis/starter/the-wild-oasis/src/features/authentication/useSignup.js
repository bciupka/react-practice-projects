import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { signup as signupApi } from "../../services/apiAuth";

export default function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success("User created successfully");
    },
    onError: (err) => {
      console.error(err.message);
      toast.error("Error while creating a user");
    },
  });

  return { signup, isLoading };
}
