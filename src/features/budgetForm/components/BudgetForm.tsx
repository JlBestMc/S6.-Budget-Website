import React from "react";

interface BudgetFormProps {
  form: { clientName: string; clientPhone: string; clientEmail: string };
  setForm: React.Dispatch<
    React.SetStateAction<{
      clientName: string;
      clientPhone: string;
      clientEmail: string;
    }>
  >;
  onSubmit: () => void;
}

export default function BudgetForm ({ form, setForm, onSubmit }: BudgetFormProps) {
  return (
    <div className="bg-white p-4 rounded shadow space-y-4">
      <h2 className="text-xl font-bold">Demanar pressupost</h2>
      <input
        className="border p-2 w-full rounded"
        type="text"
        placeholder="Nom del client/a"
        value={form.clientName}
        onChange={(e) => setForm((f) => ({ ...f, clientName: e.target.value }))}
      />
      <input
        className="border p-2 w-full rounded"
        type="tel"
        pattern="[0-9]*"
        inputMode="numeric"
        placeholder="Telefon del client/a"
        value={form.clientPhone}
        onChange={(e) =>
          setForm((f) => ({ ...f, clientPhone: e.target.value }))
        }
      />
      <input
        className="border p-2 w-full rounded"
        type="text"
        placeholder="Emial del client/a"
        value={form.clientEmail}
        onChange={(e) =>
          setForm((f) => ({ ...f, clientEmail: e.target.value }))
        }
      />
      <button
        onClick={onSubmit}
        className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
      >
        Sol·licitar pressupost →
      </button>
    </div>
  );
};

