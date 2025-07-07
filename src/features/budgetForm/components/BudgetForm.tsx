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

export default function BudgetForm({
  form,
  setForm,
  onSubmit,
}: BudgetFormProps) {
  return (
    <div className="bg-white pt-8 pb-12 p-5 rounded-xl shadow-xl space-y-4 border-t-8 border-green-600">
      <h2 className="text-2xl font-bold font-josefin">Demanar pressupost</h2>
      <div className="flex gap-3">
        <input
          className="border p-2 w-2/4 rounded font-josefin border-gray-400"
          type="text"
          placeholder="Nom del client/a"
          value={form.clientName}
          onChange={(e) =>
            setForm((f) => ({ ...f, clientName: e.target.value }))
          }
        />
        <input
          className="border p-2 w-2/4 border-gray-400 font-josefin  rounded"
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
          className="border p-2 w-2/4  rounded font-josefin border-gray-400"
          type="text"
          placeholder="Emial del client/a"
          value={form.clientEmail}
          onChange={(e) =>
            setForm((f) => ({ ...f, clientEmail: e.target.value }))
          }
        />
        <button
          onClick={onSubmit}
          className="bg-green-600  text-white px-4  w-2/4 rounded font-josefin hover:bg-green-700"
        >
          Sol·licitar pressupost →
        </button>
      </div>
    </div>
  );
}
