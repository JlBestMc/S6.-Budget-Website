import { SERVICES } from "../data/services";
import Card from "./card";
import type { ServiceTypes } from "../types/servicesTypes";

interface ServiceCardsProps {
  selected: number[];
  onToggle: (id: number) => void;
  webOptions: {
    numPages: number;
    numLanguages: number;
    onChangePages: (value: number) => void;
    onChangeLanguages: (value: number) => void;
  };
}

export default function ServiceCards({
  selected,
  onToggle,
  webOptions,
}: ServiceCardsProps) {
  return (
    <div className="space-y-4">
      {SERVICES.map((service: ServiceTypes) => (
        <Card
          key={service.id}
          service={service}
          checked={selected.includes(service.id)}
          onToggle={() => onToggle(service.id)}
          isWebService={service.title.toLowerCase().includes("web")}
          webOptions={
            service.title.toLowerCase().includes("web") &&
            selected.includes(service.id)
              ? webOptions
              : undefined
          }
        />
      ))}
    </div>
  );
}
