import ServiceCards from "../features/cards/components/ServiceCards";
import { SERVICES } from "../features/cards/data/services";
import bgCard from "../assets/bg-card.jpg";
import { calculateTotal } from "../features/cards/lib/calculateTotal";
import { useSelectableServices } from "../features/cards/hooks/useSelectableCard";

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
      <div
        style={{ backgroundImage: `url(${bgCard})` }}
        className="bg-cover bg-no-repeat max-w-3xl h-36 mx-auto p-10 space-y-6 rounded-2xl my-10"
      >
        <h1 className="text-3xl text-white font-bold text-center">
          Aconsegueix la millor qualitat
        </h1>
      </div>
      <div className="max-w-3xl mx-auto p-6 space-y-6">
        <ServiceCards selected={selected}
        onToggle={toggleService}
        webOptions={{
          numPages,
          numLanguages,
          onChangePages: setNumPages,
          onChangeLanguages: setNumLanguages,
        }} />
        <div className="text-right font-bold text-xl">
          Preu pressupostat: {total.toFixed(2)} €
        </div>
      </div>
    </>
  );
}

