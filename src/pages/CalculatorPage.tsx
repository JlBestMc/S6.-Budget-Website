import ServiceCards from "../features/cards/components/ServiceCards";
import { SERVICES } from "../features/cards/data/services";
import { calculateTotal } from "../features/cards/lib/calculateTotal";
import { useSelectableServices } from "../features/cards/hooks/useSelectableCard";
import iconHeader from "../assets/iconHeader.svg";
import boostGreen from "../assets/boost-green.png";

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
      <div className="flex items-center justify-center m-5">
        <img className="w-20 mr-3 filter" src={boostGreen} alt="Logo" />
        <div>
          <p className="text-4xl font-bold text-center text-green-900 font-josefin">
            BUSINESSBOOST
          </p>
          <p className="text-green-900 pl-1 font-josefin">ENHANCE YOUR BUSINESS</p>
        </div>
      </div>
      <div className="flex items-center justify-center h-64">
        <div className="w-5xl bg-white rounded-b-lg border-t-8 border-green-400 px-4 py-8 flex flex-col justify-around shadow-md">
          <p className="text-xl font-bold font-josefin">
            Aconsegueix la millor qualitat
          </p>
          <div className="py-3">
            <p className="text-gray-400 font-semibold font-josefin text-md">
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
              <button className="bg-slate-200 px-2 rounded-xl font-josefin hover:bg-slate-400 transition-colors ease-in-out">
                qualitat
              </button>
              <button className="bg-slate-200 px-2 rounded-xl font-josefin hover:bg-slate-400 transition-colors ease-in-out">
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
