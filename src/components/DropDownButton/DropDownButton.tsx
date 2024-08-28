// DropdownSelector.tsx
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { useFiltersContext } from "../../FiltersContext";

interface DropDownItem {
  name: string;
  value: string;
}

interface DropDownButtonProps {
  items: DropDownItem[];
  placeholder: string;
}

const DropdownSelector: React.FC<DropDownButtonProps> = ({
  items,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { filters, setFilter } = useFiltersContext();
  const [counter, setCounter] = useState(0);
  const filterKey = placeholder;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const checkedItems = filters[filterKey] || new Set<string>();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (item: DropDownItem) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(item.value)) {
      newCheckedItems.delete(item.value);
    } else {
      newCheckedItems.add(item.value);
    }
    setFilter(filterKey, newCheckedItems);
  };

  useEffect(() => {
    setCounter(checkedItems.size);
  }, [checkedItems]);

  const text = "Selected";

  return (
    <div className="dropdown_container">
      <button className={styles.dropdown_btn} onClick={toggleMenu}>
        {counter > 0 ? `${text} (${counter})` : `${placeholder}`}
      </button>
      {isOpen && (
        <ul className={styles.dropwdown__menu}>
          {items.map((item) => (
            <li className={styles.dropdown__menu_item} key={item.value}>
              <input
                className={styles.dropdown__menu_checkbox}
                type="checkbox"
                checked={checkedItems.has(item.value)}
                onChange={() => handleCheckboxChange(item)}
              />
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownSelector;
