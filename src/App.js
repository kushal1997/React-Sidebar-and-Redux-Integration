import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Messages from "./Pages/Messages";
import Products from "./Pages/Products";
import Reports from "./Pages/Reports";
import Reports1 from "./Pages/Reports1";
import Reports2 from "./Pages/Reports2";
import Reports3 from "./Pages/Reports3";
import Support from "./Pages/Support";
import Team from "./Pages/Team";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/products" element={<Products />}></Route>
          <Route exact path="/reports" element={<Reports />}></Route>
          <Route exact path="/team" element={<Team />}></Route>
          <Route exact path="/messages" element={<Messages />}></Route>
          <Route exact path="/support" element={<Support />}></Route>
          <Route exact path="/reports/reports1" element={<Reports1 />}></Route>
          <Route exact path="/reports/reports2" element={<Reports2 />}></Route>
          <Route exact path="/reports/reports3" element={<Reports3 />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
