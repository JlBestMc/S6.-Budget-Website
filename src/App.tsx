
import ServiceSelector from "./features/cards/components/ServiceCards.tsx";
import { useSelectableServices } from "./features/cards/hooks/useSelectableCard.tsx";
import { SERVICES } from "./features/cards/data/services.ts";

function App() {
  const { selected, toggleService } = useSelectableServices(); 
  
  const total = selected.reduce((sum, id) => {
    const service = SERVICES.find((s) => s.id === id);
    return sum + (service ? service.price : 0);
  }, 0);

  return (
    <>
      <div className="max-w-3xl mx-auto p-6 space-y-6 bg-amber-400">
      <h1 className="text-3xl font-bold text-center">Aconsegueix la millor qualitat</h1>
      <ServiceSelector selected={selected} onToggle={toggleService} />
      <div className="text-right font-bold text-xl">
        Preu pressupostat: {total} €
      </div>
    </div>
    </>
  );
}

export default App;
