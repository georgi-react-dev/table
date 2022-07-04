import React, { useState } from "react";

function TableFilter({ items, label, selectItem }) {
  const [selectedOption, setSelectedOption] = useState('all');
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
        <option key='all' value=''>All</option>;
        {items.length &&
          items.map((item) => {
            return <option key={item._id} value={item._id}>{item.name}</option>;
          })}
      </select>
    </div>
  );
}

export default TableFilter;
