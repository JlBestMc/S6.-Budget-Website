interface WebOptionsProps {
  numPages: number;
  numLanguages: number;
  onChangePages: (value: number) => void;
  onChangeLanguages: (value: number) => void;
}

export default function WebOptions({
  numPages,
  numLanguages,
  onChangePages,
  onChangeLanguages,
}: WebOptionsProps) {
  return (
    <div className="mt-4 space-y-4  pt-4">
      <div className="flex items-center gap-3">
        <span className="text-sm">📄 Número de pàgines:</span>
        <button
          onClick={() => onChangePages(Math.max(1, numPages - 1))}
          className="px-2 py-1 border rounded"
        >
          -
        </button>
        <input
          type="number"
          value={numPages}
          readOnly
          className="w-12 text-center border rounded"
        />
        <button
          onClick={() => onChangePages(numPages + 1)}
          className="px-2 py-1 border rounded"
        >
          +
        </button>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-sm">🌐 Número de llenguatges:</span>
        <button
          onClick={() => onChangeLanguages(Math.max(1, numLanguages - 1))}
          className="px-2 py-1 border rounded"
        >
          -
        </button>
        <input
          type="number"
          value={numLanguages}
          readOnly
          className="w-12 text-center border rounded"
        />
        <button
          onClick={() => onChangeLanguages(numLanguages + 1)}
          className="px-2 py-1 border rounded"
        >
          +
        </button>
      </div>
    </div>
  );
}
