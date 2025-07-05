import ServiceCards from "../features/cards/components/ServiceCards";
import { useSelectableServices } from "../features/cards/hooks/useSelectableCard";
import { SERVICES } from "../features/cards/data/services";
import bgCard from "../assets/bg-card.jpg";

export default function CalculatorPage() {
  const { selected, toggleService } = useSelectableServices();

  const total = selected.reduce((sum, id) => {
    const service = SERVICES.find((s) => s.id === id);
    return sum + (service ? service.price : 0);
  }, 0);

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
        <ServiceCards selected={selected} onToggle={toggleService} />
        <div className="text-right font-bold text-xl">
          Preu pressupostat: {total} €
        </div>
      </div>
    </>
  );
}
