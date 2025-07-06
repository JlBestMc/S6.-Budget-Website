import Checkbox from "./Checkbox";
import type { ServiceTypes } from "../types/servicesTypes";
import WebOptions from "./WebOptions";

interface CardProps {
  service: ServiceTypes;
  checked: boolean;
  onToggle: () => void;
  isWebService?: boolean; // true si es la card Web
  webOptions?: {
    numPages: number;
    numLanguages: number;
    onChangePages: (val: number) => void;
    onChangeLanguages: (val: number) => void;
  };
}

export default function Card({
  service,
  checked,
  onToggle,
  isWebService,
  webOptions,
}: CardProps) {
  const { id, title, description, price } = service;
  return (
    <>
      <div
        className={`flex flex-col p-10 border-t-4 rounded-xl shadow-lg mb-10 ${
          checked ? "border border-green-400" : "border-t-yellow-400"
        }`}
      >
        <div className="flex flex-row justify-between items-center">
          <div className="w-2/5">
            <h3 className="font-bold w-fit text-xl font-josefin">{title}</h3>
            <p className="text-md text-gray-800 font-semibold font-montserrat pt-2">{description}</p>
          </div>
          <div>
            <p className="text-3xl font-bold font-montserrat">{price} €</p>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox
              id={`check-${id}`}
              checked={checked}
              onCheckedChange={onToggle}
            />
          </div>
        </div>
        <div
          className={`transition-all duration-300 overflow-hidden ${
            isWebService && checked ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {isWebService && checked && webOptions && (
            <WebOptions
              numPages={webOptions.numPages}
              numLanguages={webOptions.numLanguages}
              onChangePages={webOptions.onChangePages}
              onChangeLanguages={webOptions.onChangeLanguages}
            />
          )}
        </div>
      </div>
    </>
  );
}
