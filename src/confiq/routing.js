import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import React from "react";
import Dashboard from "../screens/dashboar";
import SignIN from "../screens/signIn"

function Routing(props) {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/" element={<SignIN/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routing;
