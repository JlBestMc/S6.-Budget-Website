import type { Budget } from "../types/budgetTypes";
import { SERVICES } from "../../cards/data/services";

interface BudgetListProps {
  budgets: Budget[];
}

export default function BudgetList({ budgets }: BudgetListProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Pressupostos en curs:</h2>
      {budgets.map((budget) => (
        <div
          key={budget.id}
          className="bg-white p-4 flex justify-around rounded items-center shadow"
        >
          <div>
            <h3 className="font-bold text-2xl">{budget.clientName}</h3>
            <p className=" text-sm text-gray-500">{budget.clientEmail}</p>
            <p className=" text-sm text-gray-500">{budget.clientPhone}</p>
          </div>
          <div>
            <p className="font-semibold">Serveis contractats</p>
            <ul className="my-2 list-disc font-semibold list-inside">
              {budget.selectedServices.map((id) => {
                const service = SERVICES.find((s) => s.id === id);
                return (
                  <li key={id}>{service?.title || "Servei desconegut"}</li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col text-center">
            <p className="font-bold text-gray-400">Total:</p>
            <p className="font-bold text-3xl">{budget.total} €</p>
          </div>
        </div>
      ))}
    </div>
  );
}
