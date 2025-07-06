import { useNavigate } from "react-router-dom";
import bg from "../assets/bg.jpg";
import logo from "../assets/logo.png";
import boost from "../assets/boost.png";

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen">
      <div className="w-2/5 relative h-dvh">
        {/* Centered logo/text over background */}
        <div className="absolute inset-0 flex flex-col items-center mt-40 z-10">
          <img className="w-50" src={boost} alt="Logo" />
          <p className="text-4xl font-bold text-center tracking-widest text-white">BUSINESSBOOST</p>
          <p className="text-white tracking-widest">ENHACE YOUR BUSINESS</p>
        </div>
        <img className="h-full w-full object-cover" src={bg} alt="Background" />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="flex items-center justify-center m-auto my-6">
          <img className="w-20 mr-3 filter" src={logo} alt="Logo" />
          <p className="text-4xl font-bold text-center text-green-900">BusinessBoost</p>
        </div>
        <h1 className="text-4xl font-bold mb-6">Benvingut/da a BusinessBost</h1>
        <p className="mb-4 text-lg">Clica al botó per comerçar</p>
        <button
          onClick={() => navigate("/calculator")}
          className="cursor-pointer transition-all bg-green-500 text-white px-10 py-2 rounded-lg
          border-green-700 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] font-bold"
        >
          Començar
        </button>
      </div>
    </div>
  );
}
