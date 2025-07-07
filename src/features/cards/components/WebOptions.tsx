import page from "../../../assets/page.png";
import idioma from "../../../assets/idioma.png";
import { useState } from "react";
import InfoModal from "../../../features/infoModal/InfoModal";

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
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="flex justify-end">
      <div className="mt-4 space-y-4 pt-4">
        <label className="flex items-center justify-end text-sm  flex-en gap-1">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="text-gray-800 cursor-pointer font-montserrat font-bold hover:text-blue-500"
            >
              Informació ℹ️
            </button>
          </label>
          <InfoModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Número de llenguatges"
          message="Afegeix els llenguatges que tindrà el teu projecte. El cost de cada llenguatge és de 30€."
        />
        <div className="flex justify-end items-center h-20 gap-3">
          <span className="text-sm flex items-center text-gray-800 font-semibold font-montserrat">
            <img className="w-10 mr-3" src={page}></img> Número de pàgines:
          </span>
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
          <span className="text-sm flex items-center text-gray-800 font-semibold font-montserrat">
            <img className="w-10 mr-2" src={idioma}></img> Número de
            llenguatges:
          </span>
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
