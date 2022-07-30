import React from "react";
import Navbar from "./Navbar";

const ListStock = () => {
  return (
    <div className="bg-light min-vh-100 h-100">
      <Navbar />
      <div className="container mt-4">
        <div className="border-bottom">
          <h3 className="fw-light" style={{ letterSpacing: "1px" }}>
            Stock:
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ListStock;
