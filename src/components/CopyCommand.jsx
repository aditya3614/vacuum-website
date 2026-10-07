import { useRef, useState } from "react";

export default function CopyCommand({ command }) {
  const [label, setLabel] = useState("Copy");
  const codeRef = useRef(null);

  async function copy() {
    try {
      await navigator.clipboard.writeText(command);
      setLabel("Copied");
    } catch {
      const range = document.createRange();
      range.selectNodeContents(codeRef.current);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      setLabel("Selected");
    }
    setTimeout(() => setLabel("Copy"), 1800);
  }

  return (
    <div className="cmd">
      <code ref={codeRef}>{command}</code>
      <button className="copy" type="button" onClick={copy}>{label}</button>
    </div>
  );
}
