import Checkbox from "./Checkbox";
import type { Service } from "../types/services";


interface CardProps{
  service: Service;
  checked: boolean;
  onToggle: () => void;
}

export default function Card({ service, checked, onToggle }: CardProps) {
  const { id, title, description, price } = service;
  return (
       <div className="flex justify-between items-center p-6 rounded-xl shadow-md bg-white">
      <div>
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="text-2xl font-bold mt-2">{price} €</p>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id={`check-${id}`} checked={checked} onCheckedChange={onToggle} />
        <label htmlFor={`check-${id}`}>Afegir</label>
      </div>
    </div>
  );
}