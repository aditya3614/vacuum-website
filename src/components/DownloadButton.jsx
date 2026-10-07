import { DOWNLOAD_URL } from "../content.js";

export default function DownloadButton({ small = false, children = "Download for Mac" }) {
  return (
    <a className={small ? "btn small" : "btn"} href={DOWNLOAD_URL}>
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M8 2v8.5M4.5 7 8 10.5 11.5 7M3 13.5h10" />
      </svg>
      {children}
    </a>
  );
}
