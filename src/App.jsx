import { useState } from "react";
import Countdown from "./components/Countdown";
import Modal from "./components/Modal";
import Carousel from "./components/Carousel";
import Tabs from "./components/Tabs";
import Dropdown from "./components/Dropdown";
import Tooltip from "./components/Tooltip";
import Accordion from "./components/Accordion";
import Toast from "./components/Toast";
import ProgressBar from "./components/ProgressBar";
import CheckboxGroup from "./components/CheckboxGroup";
import Counter from "./components/Counter";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const [toastMsg, setToastMsg] = useState("");
  const [progress, setProgress] = useState(30);
  const [checkedValues, setCheckedValues] = useState([]);
  const tabs = [
    { label: "标签一", content: <div>内容一</div> },
    { label: "标签二", content: <div>内容二</div> },
    { label: "标签三", content: <div>内容三</div> },
  ];
  const [dropdownValue, setDropdownValue] = useState();
  const dropdownOptions = [
    { label: "选项一", value: 1 },
    { label: "选项二", value: 2 },
    { label: "选项三", value: 3 },
  ];
  const accordionItems = [
    { title: "面板一", content: <div>内容一</div> },
    { title: "面板二", content: <div>内容二</div> },
    { title: "面板三", content: <div>内容三</div> },
  ];
  const checkboxOptions = [
    { label: "选项A", value: "A" },
    { label: "选项B", value: "B" },
    { label: "选项C", value: "C" },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Countdown 倒计时组件示例</h1>
      <input
        type="number"
        value={countdown}
        min={0}
        onChange={(e) => setCountdown(Number(e.target.value))}
        style={{ width: 60 }}
      />
      <Countdown seconds={countdown} />
      <hr style={{ width: "100%" }} />
      <h1>Modal 模态框组件示例</h1>
      <button onClick={() => setModalOpen(true)}>打开模态框</button>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <div>这是一个模态框内容</div>
      </Modal>
      <hr style={{ width: "100%" }} />
      <h1>Carousel 轮播图组件示例</h1>
      <Carousel />
      <hr style={{ width: "100%" }} />
      <h1>Tabs 标签页组件示例</h1>
      <Tabs tabs={tabs} />
      <hr style={{ width: "100%" }} />
      <h1>Dropdown 下拉菜单组件示例</h1>
      <Dropdown
        options={dropdownOptions}
        value={dropdownValue}
        onChange={setDropdownValue}
      />
      <div style={{ marginTop: 8 }}>当前选择：{dropdownValue || "无"}</div>
      <hr style={{ width: "100%" }} />
      <h1>Tooltip 气泡提示组件示例</h1>
      <Tooltip text="这是气泡提示">把鼠标移到我上面</Tooltip>
      <hr style={{ width: "100%" }} />
      <h1>Accordion 手风琴组件示例</h1>
      <Accordion items={accordionItems} />
      <hr style={{ width: "100%" }} />
      <h1>Toast 消息提示组件示例</h1>
      <button onClick={() => setToastMsg("操作成功！")}>显示 Toast</button>
      <Toast message={toastMsg} onClose={() => setToastMsg("")} />
      <hr style={{ width: "100%" }} />
      <h1>ProgressBar 进度条组件示例</h1>
      <input
        type="range"
        min={0}
        max={100}
        value={progress}
        onChange={(e) => setProgress(Number(e.target.value))}
      />
      <ProgressBar value={progress} max={100} />
      <hr style={{ width: "100%" }} />
      <h1>CheckboxGroup 复选框组组件示例</h1>
      <CheckboxGroup
        options={checkboxOptions}
        value={checkedValues}
        onChange={setCheckedValues}
      />
      <div>已选：{[...checkedValues].sort().join(",") || "无"}</div>
      <hr style={{ width: "100%" }} />
      <h1>Counter 计数器组件示例</h1>
      <Counter initial={0} />
      <hr style={{ width: "100%" }} />
    </div>
  );
}

export default App;
