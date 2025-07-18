import { useState } from "react";

function Tooltip({ children, text }) {
  const [visible, setVisible] = useState(false);
  return (
    <span
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      style={{ cursor: "pointer" }}
    >
      {children}
      {visible && <span>{text}</span>}
    </span>
  );
}

export default Tooltip;
