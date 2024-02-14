import React, { useState } from "react";
import DropdownItem from "./DropdownItem";

export default function DropdownList() {
  const [list, setList] = useState([
    { value: "Profile Information", selected: false },
    { value: "Change Password", selected: false },
    { value: "Become PRO", selected: false },
    { value: "Help", selected: false },
    { value: "Log Out", selected: false },
  ]);

  function handleSelect(val) {
    const newArray = list.map((el) => {
      if (el.value === val) {
        return { ...el, selected: !el.selected };
      } else {
        return { ...el, selected: false };
      }
    });
    setList(newArray);
  }

  return (
    <ul data-id="dropdown" className="dropdown">
      {list.map((el, index) => (
        <DropdownItem
          value={el.value}
          key={index}
          handleSelect={handleSelect}
          selected={el.selected}
        />
      ))}
    </ul>
  );
}
