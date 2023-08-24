import React, { useState, useEffect } from "react";
import Item from "./Item";

export default function Portfolio() {
  return (
    <div id="portfolio">
      <div className="Psection">
        <h3>||Portfolio</h3>
        <h2>My PortFolio</h2>
        <div className="Pitems">
          <Item />
        </div>
      </div>
    </div>
  );
}
