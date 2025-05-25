import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainPage from "./page/main.tsx";

window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      (
        window.pageYOffset /
        (document.body.offsetHeight - window.innerHeight)
      ).toString()
    );
  },
  false
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainPage />
  </StrictMode>
);
