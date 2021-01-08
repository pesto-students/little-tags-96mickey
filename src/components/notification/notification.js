import { toast } from "react-toastify";
import { NotifyTimer } from "./../../constants/notification.contants";
export const success = (msg) =>
  toast.success(msg, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: NotifyTimer,
  });

export const info = (msg) =>
  toast.info(msg, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: NotifyTimer,
  });
export const error = (msg) =>
  toast.error(msg, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: NotifyTimer,
  });
