import React, { useState } from "react";

function TableFilter({ items, label, selectItem }) {
  const [selectedOption, setSelectedOption] = useState(items[0].id);
  //console.log("ITEMS", items);
  return (
    <div>
      <label>{label}</label>
      <select className="filter-select"
        value={selectedOption}
        onChange={(e) => {
            selectItem(e.target.value);
            setSelectedOption(e.target.value)
        }}
      >
        {items.length &&
          items.map((item) => {
            return <option key={item.id} value={item.id}>{item.name}</option>;
          })}
      </select>
    </div>
  );
}

export default TableFilter;
