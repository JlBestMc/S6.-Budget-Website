import { useState } from "react";

export function useSelectableServices() {
  const [selected, setSelected] = useState<number[]>([]);

  const toggleService = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  return { selected, toggleService };
}
