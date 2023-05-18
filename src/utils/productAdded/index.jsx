import { toast } from "react-toastify";

export const productAdded = (product) =>
  toast.success(`${product} added to your shopping cart`, {
    position: toast.POSITION.BOTTOM_RIGHT,
  });
