import "./App.css";
import BuySell from "./component/BuyAndSell/BuySell";
import Swap from "./component/Swap/Swap";
import MyFavorites from "./component/MyFavorites/MyFavorites";
// import { Box } from './component/Cards/Cards';
import Main from "./component/Main/Main";
import Sidebar from "./component/Sidebar/Sidebar";
import Topbar from "./component/Topbar/Topbar";
import { Routes, Route } from "react-router-dom";
import Counter from "./component/Counter/Counter";
import Form from "./component/FormUseState/Form";
import Home from "./component/Home/Home";
import Details from "./component/Details/Details";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="main">
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/details/:id" element={<Details />} />
          <Route path="buy-sell" element={<BuySell />} />
          <Route path="swap" element={<Swap />} />
          <Route path="my-favorites" element={<MyFavorites />} />
          <Route path="counter" element={<Counter />} />
          <Route path="form-use-state" element={<Form />} />
        </Routes>
        {/* <Main /> */}
        {/* <Box /> */}
      </main>
    </div>
  );
}

export default App;
