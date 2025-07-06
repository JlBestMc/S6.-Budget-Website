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
              <p className="text-4xl font-bold text-center font-josefin tracking-widest text-green-900">
                BUSINESSBOOST
              </p>
              <p className="text-green-900 pl-1 tracking-widest ">ENHANCE YOUR BUSINESS</p>
            </div>
          </div>
        </div>
        <h1 className="text-6xl font-bold text-transparent mt-16 ml-6 bg-clip-text bg-gradient-to-r from-green-900 to-green-500 font-josefin">
          Benvingut/da a BusinessBost
        </h1>
        <p className="mb-4 ml-6 my-8 text-xl font-josefin mr-10 leading-10 text-gray-700">Gracies per tonar a visitarnos, clica al botó que tens a continuació per poder accedir a la nostra página de serveis y preus.</p>
        <button
          onClick={() => navigate("/calculator")}
          className="cursor-pointer transition-all bg-gradient-to-r from-green-900 to-green-500  ml-5 my-8 text-white px-15 py-5 rounded-lg
          border-green-900 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] font-bold font-josefin"
        >
          Començar
        </button>
      </div>
      <div className="w-2/4 relative h-dvh">
        <div className="absolute inset-0 flex mt-50 items-start justify-center z-10">
          <img className="w-20" src={boost} alt="Logo" />
          <div className="flex mt-2 flex-col ml-3">
            <p className="text-4xl font-bold text-center tracking-widest font-josefin text-white">
              BUSINESSBOOST
            </p>
            <p className="text-white text-start tracking-widest pl-1 font-josefin">ENHACE YOUR BUSINESS</p>
          </div>
        </div>
        <img className="h-full w-full object-cover" src={bg} alt="Background" />
      </div>
    </div>
  );
}
