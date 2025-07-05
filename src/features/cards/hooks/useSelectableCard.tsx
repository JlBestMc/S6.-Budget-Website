import { useState } from "react";

export function useSelectableServices() {
  const [selected, setSelected] = useState<number[]>([]);
  const [numPages, setNumPages] = useState(1);
  const [numLanguages, setNumLanguages] = useState(1);

  const toggleService = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  return {
    selected,
    toggleService,
    numPages,
    numLanguages,
    setNumPages,
    setNumLanguages,
  };
}
