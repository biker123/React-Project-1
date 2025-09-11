import "./App.css";
import BuySell from "./component/BuyAndSell/BuySell";
import Swap from "./component/Swap/Swap";
import MyFavorites from "./component/MyFavorites/MyFavorites";
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
        <Routes>
          <Route path="swap" element={<Swap />} />
        </Routes>
        <Routes>
          <Route path="my-favorites" element={<MyFavorites />} />
        </Routes>
        <Main />
        {/* <Box /> */}
      </main>
    </div>
  );
}

export default App;
