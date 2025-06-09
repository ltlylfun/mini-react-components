import { useState, useEffect } from "react";

const images = [
  import.meta.env.BASE_URL + "react.svg",
  import.meta.env.BASE_URL + "svelte.svg",
  import.meta.env.BASE_URL + "vuedotjs.svg",
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div>
      <button onClick={prev}>上一张</button>
      <img
        src={images[index]}
        alt="carousel"
        style={{ width: 200, height: 200, margin: "0 20px" }}
      />
      <button onClick={next}>下一张</button>
    </div>
  );
}
