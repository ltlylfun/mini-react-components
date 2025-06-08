import { useState } from "react";
import Countdown from "./components/Countdown";
import Modal from "./components/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [countdown, setCountdown] = useState(10);
  return (
    <div>
      <h1>倒计时组件示例</h1>
      <input
        type="number"
        value={countdown}
        min={0}
        onChange={(e) => setCountdown(Number(e.target.value))}
        style={{ width: 60 }}
      />
      <Countdown seconds={countdown} />
      <hr />
      <h1>模态框组件示例</h1>
      <button onClick={() => setModalOpen(true)}>打开模态框</button>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <div>这是一个模态框内容</div>
      </Modal>
    </div>
  );
}

export default App;
