import React, { useState } from "react";
import DropdownList from "./DropdownList";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(true);
  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="container">
      <div
        data-id="wrapper"
        className={`dropdown-wrapper${isOpen ? " open" : ""}`}
        onClick={handleClick}
      >
        <button data-id="toggle" className="btn">
          <span>Account Settings</span>
          <i className="material-icons">public</i>
        </button>
        <DropdownList />
      </div>
    </div>
  );
}
