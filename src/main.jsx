import "bootstrap/dist/css/bootstrap.min.css";

import ReactDOM from "react-dom/client";
import ResidentApp from "./App_.jsx";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("worker.js")
      .then((reg) => console.log("SW registered:", reg))
      .catch((err) => console.error("SW registration failed:", err));
  });
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<ResidentApp />);
