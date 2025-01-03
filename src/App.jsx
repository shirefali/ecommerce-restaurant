import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/Home";
import Header from "./components/Header";
import Store from "./components/Store";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
