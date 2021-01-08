import { toast } from "react-toastify";

export const success = (msg) =>
  toast.success(msg, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 5000,
  });

export const info = (msg) =>
  toast.info(msg, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 5000,
  });
export const error = (msg) =>
  toast.error(msg, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 5000,
  });
