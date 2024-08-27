import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
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
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [counter, setCounter] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (item: DropDownItem) => {
    setCheckedItems((prevCheckedItems) => {
      const newCheckedItems = new Set(prevCheckedItems);
      if (newCheckedItems.has(item.value)) {
        newCheckedItems.delete(item.value);
      } else {
        newCheckedItems.add(item.value);
      }
      return newCheckedItems;
    });
  };

  useEffect(() => {
    setCounter(checkedItems.size);
  }, [checkedItems]);

  return (
    <div className="dropdown_container">
      <button className={styles.dropdown_btn} onClick={toggleMenu}>
        {`${placeholder} (${counter})`}
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
