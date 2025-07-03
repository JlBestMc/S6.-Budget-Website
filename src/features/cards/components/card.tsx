import Checkbox from "./Checkbox";
import type { Service } from "../types/services";

interface CardProps {
  service: Service;
  checked: boolean;
  onToggle: () => void;
}

export default function Card({ service, checked, onToggle }: CardProps) {
  const { id, title, description, price } = service;
  return (
    <div className="flex justify-between items-center p-10 rounded-xl shadow-lg bg-white">
      <div className="w-2/5">
        <h3 className="font-bold w-fit text-xl">{title}</h3>
        <p className="text-sm pt-2">{description}</p>
      </div>
      <div>
        <p className="text-2xl font-bold mt-2 font-roboto">{price} €</p>
      </div>
      <div className="flex items-center gap-3 pr-5">
        <Checkbox
          id={`check-${id}`}
          checked={checked}
          onCheckedChange={onToggle}
        />
        <label htmlFor={`check-${id}`}>Afegir</label>
      </div>
    </div>
  );
}
