import React from "react";
import Navbar from "./Navabr";
function Customers() {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h1 className="text-2xl ml-6">Menu</h1>
      </div>
      <hr />
      <br />
      <table>
        <ul>
          <li>1</li>
          <li>Name</li>
          <li>Orders</li>
        </ul>
        <ul>
          <li>1</li>
          <li>Name</li>
          <li>Orders</li>
        </ul>
      </table>
    </div>
  );
}

export default Customers;
