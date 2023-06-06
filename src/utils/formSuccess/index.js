import { toast } from "react-toastify";

export const formSuccess = () =>
  toast.success(`Your message is sent`, {
    position: toast.POSITION.BOTTOM_RIGHT,
  });
