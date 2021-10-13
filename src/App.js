import "./styles.css";
import React, { useState } from "react";

import Menu from "./menu";
function App() {
  const [data, setData] = useState([]);
  return (
    <div className="Container">
      <Menu data={data} tittle="fff" />
    </div>
  );
}

export default App;
