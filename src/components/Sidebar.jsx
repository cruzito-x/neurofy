import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { TbCheckupList } from "react-icons/tb";
import { GoHome } from "react-icons/go";
import { VscGraph } from "react-icons/vsc";
import { MdOutlineTipsAndUpdates, MdOutlineSettings } from "react-icons/md";
import { BsQuestionSquare } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const Sidebar = () => {
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-64 h-full bg-primary-light text-white fixed top-0 left-0 flex flex-col items-center py-10">
      <img src={logo} alt="Neurofy Logo" className="w-32 mb-5" />
      <h2 className="text-lg font-bold mb-8">Neurofy</h2>
      <nav className="space-y-4">
        <a
          onClick={() => navigate("/home")}
          className="flex items-center py-2 space-x-3 px-4 hover:bg-primary-dark rounded-md w-full"
        >
          <GoHome className="text-2xl" />
          <span>Inicio</span>
        </a>
        <a
          onClick={() => navigate("/test")}
          className="flex items-center py-2 space-x-3 px-4 hover:bg-primary-dark rounded-md w-full"
        >
          <TbCheckupList className="text-2xl" />
          <span>Realizar Test</span>
        </a>
        <a
          onClick={() => navigate("/results")}
          className="flex items-center py-2 space-x-3 px-4 hover:bg-primary-dark rounded-md w-full"
        >
          <VscGraph className="text-2xl" />
          <span>Resultados</span>
        </a>
        <a
          onClick={() => navigate("/tips")}
          className="flex items-center py-2 space-x-3 px-4 hover:bg-primary-dark rounded-md w-full"
        >
          <MdOutlineTipsAndUpdates className="text-2xl" />
          <span>Consejos y Recursos</span>
        </a>
        <a
          onClick={() => navigate("/faqs")}
          className="flex items-center py-2 space-x-3 px-4 hover:bg-primary-dark rounded-md w-full"
        >
          <BsQuestionSquare className="text-2xl" />
          <span>Preguntas frecuentes</span>
        </a>
        <a
          onClick={() => navigate("/settings")}
          className="flex items-center py-2 space-x-3 px-4 hover:bg-primary-dark rounded-md w-full"
        >
          <MdOutlineSettings className="text-2xl" />
          <span>Configuración</span>
        </a>
        <div className="relative w-full">
          <button
            className="flex items-center space-x-3 px-4 py-2 hover:bg-primary-dark rounded-md w-full"
            onClick={() => setProfileMenuOpen(!isProfileMenuOpen)}
          >
            <CgProfile className="text-2xl" />
            <span>Perfil</span>
          </button>
          {isProfileMenuOpen && (
            <div className="absolute left-40 top-3 bg-white text-primary-dark rounded-md shadow w-40">
              <a
                onClick={() => navigate("/profile")}
                className="block px-4 py-2 hover:bg-primary-dark hover:text-white"
              >
                Ver perfil
              </a>
              <a
                onClick={() => navigate("/")}
                className="block px-4 py-2 hover:bg-primary-dark hover:text-white"
              >
                Cerrar sesión
              </a>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
