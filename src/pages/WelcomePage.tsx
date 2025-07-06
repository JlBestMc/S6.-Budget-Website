import { useNavigate } from "react-router-dom";
import bg from "../assets/bg.jpg";
import boost from "../assets/boost.png";
import boostGreen from "../assets/boost-green.png";

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen">
      <div className="flex-1  p-6">
        <div className="flex justify-start">
          <div className="flex items-center m-5">
            <img className="w-20 mr-3 filter" src={boostGreen} alt="Logo" />
            <div>
              <p className="text-4xl font-bold text-center text-green-900">
                BUSINESSBOOST
              </p>
              <p className="text-green-900 pl-1 ">ENHANCE YOUR BUSINESS</p>
            </div>
          </div>
        </div>
        <h1 className="text-6xl ml-5 mt-25 font-bold font-montserrat">
          benvingut/da a BusinessBost
        </h1>
        <p className="mb-4 ml-5 my-8 text-lg font-montserrat">Gracies per tonar a visitarnos, clica al botó que tens a continuació per poder accedir a la nostra página de serveis y preus.</p>
        <button
          onClick={() => navigate("/calculator")}
          className="cursor-pointer transition-all bg-green-500 ml-5 my-8 text-white px-10 py-2 rounded-lg
          border-green-700 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] font-bold"
        >
          Començar
        </button>
      </div>
      <div className="w-2/5 relative h-dvh">
        <div className="absolute inset-0 flex mt-50 items-start justify-center z-10">
          <img className="w-20" src={boost} alt="Logo" />
          <div className="flex mt-2 flex-col ml-3">
            <p className="text-4xl font-bold text-center tracking-widest text-white">
              BUSINESSBOOST
            </p>
            <p className="text-white text-start tracking-widest pl-1">ENHACE YOUR BUSINESS</p>
          </div>
        </div>
        <img className="h-full w-full object-cover" src={bg} alt="Background" />
      </div>
    </div>
  );
}
