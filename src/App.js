import "./App.css";
import BuySell from "./component/BuyAndSell/BuySell";
// import { Box } from './component/Cards/Cards';
import Main from "./component/Main/Main";
import Sidebar from "./component/Sidebar/Sidebar";
import Topbar from "./component/Topbar/Topbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div class="app">
      <Sidebar />
      <main class="main">
        <Topbar />
        <Routes>
          <Route path="buy-sell" element={<BuySell />} />
        </Routes>
        <Main />
        {/* <Box /> */}
      </main>
    </div>
  );
}

export default App;
