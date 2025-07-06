import page from "../../../assets/page.png";
import idioma from "../../../assets/idioma.png";

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
    <div className="flex justify-end">
      <div className="mt-4 space-y-4 pt-4">
        <div className="flex justify-end items-center h-20 gap-3">
          <span className="text-sm flex items-center text-gray-800 font-semibold font-montserrat"><img className="w-10 mr-3" src={page}></img> Número de pàgines:</span>
          <button
            onClick={() => onChangePages(Math.max(1, numPages - 1))}
            className="cursor-pointer transition-all bg-red-500 text-white px-3  rounded-lg
          border-red-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] font-bold"
          >
            -
          </button>
          <input
            type="text"
            value={numPages - 1}
            readOnly
            inputMode="numeric"
            className="w-10 h-8 text-center rounded-lg shadow-sm shadow-gray-500"
          />
          <button
            onClick={() => onChangePages(numPages + 1)}
            className="cursor-pointer transition-all bg-blue-500 text-white px-2 rounded-lg
          border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] font-bold"
          >
            +
          </button>
        </div>

        <div className="flex items-center gap-3 h-20">
          <span className="text-sm flex items-center text-gray-800 font-semibold font-montserrat"><img className="w-10 mr-2" src={idioma}></img> Número de llenguatges:</span>
          <button
            onClick={() => onChangeLanguages(Math.max(1, numLanguages - 1))}
            className="cursor-pointer transition-all bg-red-500 text-white px-3 rounded-lg
          border-red-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] font-bold"
          >
            -
          </button>
          <input
            type="text"
            value={numLanguages - 1}
            readOnly
            className="w-10 h-8 text-center rounded-lg shadow-sm shadow-gray-500 appearance-none"
            inputMode="numeric"
          />
          <button
            onClick={() => onChangeLanguages(numLanguages + 1)}
            className="cursor-pointer transition-all bg-blue-500 text-white px-2 rounded-lg
          border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] font-bold"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
