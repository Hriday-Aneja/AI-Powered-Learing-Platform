import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";
import { Analytics } from "@vercel/analytics/next";

createRoot(document.getElementById("root")!).render(<App />);
