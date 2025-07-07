interface SortButtonProps {
  search: string;
  onSearchChange: (val: string) => void;
  onSortChange: (sort: "name" | "date" | "default") => void;
}

function SortButton({ search, onSearchChange, onSortChange }: SortButtonProps) {
  return <div>SortButton</div>;
}

export default SortButton;
