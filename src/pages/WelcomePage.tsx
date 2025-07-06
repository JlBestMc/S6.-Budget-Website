import { useNavigate } from "react-router-dom";

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-bold mb-6">Benvingut/da al generador de pressupostos</h1>
      <p className="mb-4 text-lg">Clica al botó per comerçar</p>
      <button
        className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        onClick={() => navigate("/calculator")}
      >
        Començar
      </button>
    </div>
  );
}
