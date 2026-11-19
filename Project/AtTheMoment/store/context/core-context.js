import { createContext, useState } from "react";

// Transfer added/removed core memory ids
export const CoreContext = createContext({
  ids: [],
  addCore: (id) => {},
  removeCore: (id) => {},
});

// Saving Core Memory States (Adding and Removing)
export default function CoreContextProvider({ children }) {
  const [coreIds, setCoreIds] = useState([]);

  function addCore(id) {
    setCoreIds((currentCoreIds) => {
      return [...currentCoreIds, id];
    });
  }

  function removeCore(id) {
    setCoreIds((currentCoreIds) => {
      return currentCoreIds.filter((favId) => favId !== id);
    });
  }

  const value = {
    ids: coreIds,
    addCore: addCore,
    removeCore: removeCore,
  };

  return <CoreContext.Provider value={value}>{children}</CoreContext.Provider>;
}
