import { useEffect } from "react";

function Toast({ message, duration = 2000, onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose && onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;
  return <div>{message}</div>;
}

export default Toast;
