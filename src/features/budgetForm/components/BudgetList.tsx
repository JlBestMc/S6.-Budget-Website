import type { Budget } from "../types/budgetTypes";
import { SERVICES } from "../../cards/data/services";

interface BudgetListProps {
  budgets: Budget[];
}

export default function BudgetList({ budgets }: BudgetListProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-10">Pressupostos en curs:</h2>
      {budgets.map((budget) => (
        <div
          key={budget.id}
          className="bg-white p-4 flex my-8 justify-around font-montserrat rounded-2xl items-center border-t-4 border-t-green-600 shadow-lg"
        >
          <div>
            <h3 className="font-bold text-2xl">{budget.clientName}</h3>
            <p className=" font-bold text-sm text-gray-400">
              {budget.clientEmail}
            </p>
            <p className=" text-sm font-bold text-gray-400">
              {budget.clientPhone}
            </p>
          </div>
          <div>
            <p className="font-bold">Serveis contractats</p>
            <ul className="my-2 list-disc font-bold list-inside">
              {budget.selectedServices.map((id) => {
                const service = SERVICES.find((s) => s.id === id);
                return (
                  <li key={id}>{service?.title || "Servei desconegut"}</li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col text-center">
            <p className="font-bold text-lg text-gray-400 ">Total:</p>
            <p className="font-bold text-3xl">{budget.total}€</p>
          </div>
        </div>
      ))}
    </div>
  );
}
