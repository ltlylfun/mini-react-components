function Modal({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div style={{ background: "#fff", padding: 20, minWidth: 200 }}>
        {children}
        <button onClick={onClose} style={{ marginTop: 10 }}>
          关闭
        </button>
      </div>
    </div>
  );
}

export default Modal;
