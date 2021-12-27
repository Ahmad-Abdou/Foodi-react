import React from "react";
import "../styles/Fotter.css";

const Fotter = () => {
  return (
    <div className="fotter-container">
      {" "}
      <div className="fotter-grid-col">
        © 2022 FOODI. All Rights Reserved 2021
      </div>
      <div className="fotter-row-1">
        <span>PHONE:</span> 0467XXXXXXXX.
      </div>
      <div className="fotter-row-2">
        {" "}
        <span>EMAIL:</span> Foodi@gmail.com.
      </div>
      <div className="fotter-row-3">
        <span>ADDRESS:</span> test 1234 Sweden.
      </div>
    </div>
  );
};

export default Fotter;
