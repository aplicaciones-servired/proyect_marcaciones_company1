import { createContext, useState } from "react";

// 1. crear el Context
export const FiltersContext = createContext();

// 2. crear el Provider para preveer el context
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 1000,
  });

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
