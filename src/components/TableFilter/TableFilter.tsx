import React, { FC, useState } from "react";
import { IFilterItem } from '../../../types'
interface Props {
  items: IFilterItem[],
  label: string,
  selectItem: (id:string) => void
}

const TableFilter:React.FC<Props> = ({ items, label, selectItem }) => {
  const [selectedOption, setSelectedOption] = useState<string>('all');

  return (
    <div>
      <label>{label}</label>
      <select className="filter-select"
        value={selectedOption}
        onChange={(e:React.ChangeEvent<HTMLSelectElement>) => {
            selectItem(e.target.value);
            setSelectedOption(e.target.value)
        }}
      >
        <option key='all' value=''>All</option>;
        {items.length &&
          items.map((item:IFilterItem) => {
            return <option key={item._id} value={item._id}>{item.name}</option>;
          })}
      </select>
    </div>
  );
}

export default TableFilter;
