// FilterContext.tsx
import React, { createContext, useState, ReactNode, useContext } from "react";

interface FilterContextType {
  filters: { [key: string]: Set<string> };
  setFilter: (key: string, newCheckedItems: Set<string>) => void;
  clearFilters: () => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [filters, setFilters] = useState<{ [key: string]: Set<string> }>({});

  const setFilter = (key: string, newCheckedItems: Set<string>) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: newCheckedItems,
    }));
  };

  const clearFilters = () => {
    setFilters({});
  };

  return (
    <FilterContext.Provider value={{ filters, setFilter, clearFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFiltersContext = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error("useFilterContext must be used within a FilterProvider");
  }
  return context;
};
