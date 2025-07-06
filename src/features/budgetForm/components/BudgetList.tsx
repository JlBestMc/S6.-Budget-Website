import type { Budget } from "../types/budgetTypes";
import { SERVICES } from "../../cards/data/services";

interface BudgetListProps {
  budgets: Budget[];
}

export default function BudgetList({ budgets }: BudgetListProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Pressupostos en curs:</h2>
      {budgets.map((budget) => (
        <div key={budget.id} className="bg-white p-4 rounded shadow">
          <h3 className="font-bold">{budget.clientName}</h3>
          <p className="italic text-sm text-gray-500">{budget.clientEmail}</p>
          <p className="italic text-sm text-gray-500">{budget.clientPhone}</p>
          <ul className="my-2 list-disc list-inside">
            {budget.selectedServices.map((id) => {
              const service = SERVICES.find((s) => s.id === id);
              return <li key={id}>{service?.title || "Servei desconegut"}</li>;
            })}
          </ul>
          <p className="font-bold">Total: {budget.total} €</p>
        </div>
      ))}
    </div>
  );
};

