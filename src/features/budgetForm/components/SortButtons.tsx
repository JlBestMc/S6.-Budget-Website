interface SortButtonProps {
  search: string;
  onSearchChange: (val: string) => void;
  onSortChange: (sort: "name" | "date" | "default") => void;
}

function SortButton({ search, onSearchChange, onSortChange }: SortButtonProps) {
  return (
    <div className="flex items-center gap-4 mb-4">
      <input
        type="text"
        placeholder="Buscar per nom"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="border px-2 py-1 rounded"
      />
      <button onClick={() => onSortChange("name")}>Nom</button>
      <button onClick={() => onSortChange("date")}>Data</button>
      <button onClick={() => onSortChange("default")}>Reiniciar</button>
    </div>
  );
}

export default SortButton;
