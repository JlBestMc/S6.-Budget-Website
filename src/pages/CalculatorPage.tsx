import ServiceCards from "../features/cards/components/ServiceCards";
import { SERVICES } from "../features/cards/data/services";
import { calculateTotal } from "../features/cards/lib/calculateTotal";
import { useSelectableServices } from "../features/cards/hooks/useSelectableCard";
import iconHeader from "../assets/iconHeader.svg";
import logo from "../assets/logo.png"

export default function CalculatorPage() {
  const {
    selected,
    toggleService,
    numPages,
    numLanguages,
    setNumPages,
    setNumLanguages,
  } = useSelectableServices();

  const total = calculateTotal(selected, SERVICES, {
    pages: numPages,
    languages: numLanguages,
  });

  return (
    <>
    <div className="flex items-center justify-center w-[1300px] m-auto my-6">
      <img className="w-20 mr-3" src={logo}></img>
      <p className="text-4xl font-semibold text-center">BusinessBoost</p>
    </div>
      <div className="flex items-center justify-center h-64">
        <div className="w-6xl bg-white rounded-b-lg border-t-8 border-green-400 px-4 py-8 flex flex-col justify-around shadow-md">
          <p className="text-lg font-bold font-sans">
            Aconsegueix la millor qualitat
          </p>
          <div className="py-3">
            <p className="text-gray-400 font-semibold text-sm">
              Tria els serveis que necessites i obtén un pressupost
              personalitzat per el teu projecte.
              <br />
              <br />
              Si tens dubtes, contacta amb nosaltres i t'ajudarem a triar el
              millor servei.
            </p>
          </div>
          <div className="flex mt-2 justify-between">
            <img className="w-10" src={iconHeader}></img>
            <div className="text-sm flex gap-2">
              <button className="bg-slate-200 px-2 rounded-xl hover:bg-slate-400 transition-colors ease-in-out">
                qualitat
              </button>
              <button className="bg-slate-200 px-2 rounded-xl hover:bg-slate-400 transition-colors ease-in-out">
                optimizació
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-6 space-y-6">
        <ServiceCards
          selected={selected}
          onToggle={toggleService}
          webOptions={{
            numPages,
            numLanguages,
            onChangePages: setNumPages,
            onChangeLanguages: setNumLanguages,
          }}
        />
        <div className="text-right font-bold text-xl">
          Preu pressupostat: {total} €
        </div>
      </div>
    </>
  );
}
