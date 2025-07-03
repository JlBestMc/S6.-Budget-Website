import { SERVICES } from "../data/services";
import Card from "./Card";
import type { Service } from "../types/services";

interface ServiceSelectorProps {
  selected: number[];
  onToggle: (id: number) => void;
}

export default function ServiceSelector({ selected, onToggle }: ServiceSelectorProps) {
  return (
    <div className="space-y-4">
      {SERVICES.map((service: Service) => (
        <Card
          key={service.id}
          service={service}
          checked={selected.includes(service.id)}
          onToggle={() => onToggle(service.id)}
        />
      ))}
    </div>
  );
}
