import { useState } from "react";

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
      {items.map((item, idx) => (
        <div key={idx}>
          <div
            style={{ cursor: "pointer", fontWeight: "bold" }}
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          >
            {item.title}
          </div>
          {openIndex === idx && <div>{item.content}</div>}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
