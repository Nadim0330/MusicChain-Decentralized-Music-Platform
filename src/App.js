import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConnectWallet from "./ConnectWallet";
import Dashboard from "./Dashboard";
import Chat from "./chat";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ConnectWallet />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat/:owner" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
