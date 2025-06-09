function ProgressBar({ value = 0, max = 100 }) {
  return (
    <div>
      <div style={{ width: 200, height: 10, background: "#eee" }}>
        <div
          style={{
            width: `${(value / max) * 100}%`,
            height: "100%",
            background: "#409eff",
          }}
        />
      </div>
      <span>
        {value} / {max}
      </span>
    </div>
  );
}

export default ProgressBar;
