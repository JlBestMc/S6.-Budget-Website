interface SortButtonProps {
  search: string;
  onSearchChange: (val: string) => void;
  onSortChange: (sort: "name" | "date" | "default") => void;
}

function SortButton({ search, onSearchChange, onSortChange }: SortButtonProps) {
  return (
    <div className="flex items-center justify-end gap-4 mb-10">
      <form className="form relative">
        <div className="absolute left-2 -translate-y-1/2 top-1/2 p-1">
          <svg
            width="17"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby="search"
            className="w-5 h-5 text-gray-700"
          >
            <path
              d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
              stroke="currentColor"
              stroke-width="1.333"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        <input
          className="input rounded-xl mr-3 pl-8 py-2 border-2 border-transparent focus:outline-none focus:border-green-600 placeholder-gray-400 transition-all duration-300 shadow-sm font-montserrat font-bold shadow-gray-500"
          type="text"
          placeholder="Buscar per nom"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </form>

      <button className="font-montserrat font-bold cursor-pointer mx-1" onClick={() => onSortChange("name")}>Nom</button>
      <button className="font-montserrat font-bold cursor-pointer mx-1" onClick={() => onSortChange("date")}>Data</button>
      <button className="font-montserrat font-bold cursor-pointer mx-1" onClick={() => onSortChange("default")}>Reiniciar</button>
    </div>
  );
}

export default SortButton;
