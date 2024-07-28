import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./assets/components/logo-Marvel.jpg";
// import Header from "../../components/Header";
// import Comics from "./assets/components/Comics";
import Characters from "./assets/components/Characters";

function App() {
  return (
    <Router>
      <div className="header">
        <img className="logo-Marvel" src={logo} alt="" />
        <input className="recherche" type="text" placeholder="recherche" />
        <button> search </button>
      </div>

      {/* <Header path="/header" element={<Header />} /> */}

      <Routes>
        {/* <Route path="/comics" element={<Comics />} /> */}
        <Route path="/" element={<Characters />} />
      </Routes>
    </Router>
  );
}

export default App;
