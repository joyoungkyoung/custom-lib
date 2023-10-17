import ReactDOM from "react-dom/client";
import App from "./App.tsx";

console.log(`■ RUNNING v${import.meta.env.VITE_APP_VERSION} ■`);

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
