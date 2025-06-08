import { useEffect, useState } from "react";

function Countdown({ seconds }) {
  const [time, setTime] = useState(seconds);
  useEffect(() => {
    if (time === 0) return;
    const t = setTimeout(() => setTime(time - 1), 1000);
    return () => clearTimeout(t);
  }, [time]);
  useEffect(() => {
    setTime(seconds);
  }, [seconds]);
  return <span>{time}</span>;
}

export default Countdown;
