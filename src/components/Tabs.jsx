import { useState } from "react";

function Tabs({ tabs }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div>
        {tabs.map((tab, idx) => (
          <button key={tab.label} onClick={() => setActiveIndex(idx)}>
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs[activeIndex].content}</div>
    </div>
  );
}

export default Tabs;
