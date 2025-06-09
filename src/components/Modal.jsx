function Modal({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div>
      <div>
        {children}
        <button onClick={onClose}>关闭</button>
      </div>
    </div>
  );
}

export default Modal;
