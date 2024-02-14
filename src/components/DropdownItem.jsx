import React from "react";

export default function DropdownItem({ value, handleSelect, selected }) {
  return (
    <li
      className={`${selected ? "active" : ""}`}
      onClick={() => handleSelect(value)}
    >
      <a href="#">{value}</a>
    </li>
  );
}
