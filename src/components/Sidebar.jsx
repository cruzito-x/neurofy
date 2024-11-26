import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { TbCheckupList } from "react-icons/tb";
import { GoHome } from "react-icons/go";
import { VscGraph } from "react-icons/vsc";
import { MdOutlineTipsAndUpdates, MdOutlineSettings } from "react-icons/md";
import { BsQuestionSquare } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Sidebar = () => {
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const [isCollapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={`${
        isCollapsed ? "w-20" : "w-64"
      } h-full bg-primary-light text-white fixed top-0 left-0 flex flex-col items-center py-4 transition-all duration-300`}
    >
      {/* Botón para colapsar */}
      <button
        className={`absolute top-4 -right-4 bg-primary-dark text-white rounded-full p-2 hover:bg-primary-light transition`}
        onClick={() => setCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <FiChevronRight /> : <FiChevronLeft />}
      </button>

      {/* Logo y título */}
      <div className="flex items-center justify-center flex-col mb-5">
        {!isCollapsed && (
          <>
            <img src={logo} alt="Neurofy Logo" className="w-20 mb-2" />
            <h2 className="text-lg font-bold">Neurofy</h2>
          </>
        )}
      </div>

      {/* Navegación */}
      <nav className="space-y-4 mt-6 w-full px-2">
        <a
          onClick={() => navigate("/home")}
          className={`flex items-center py-2 space-x-3 px-4 hover:bg-primary-dark rounded-md w-full ${
            isCollapsed ? "justify-center" : ""
          }`}
        >
          <GoHome className="text-2xl" />
          {!isCollapsed && <span>Inicio</span>}
        </a>
        <a
          onClick={() => navigate("/test")}
          className={`flex items-center py-2 space-x-3 px-4 hover:bg-primary-dark rounded-md w-full ${
            isCollapsed ? "justify-center" : ""
          }`}
        >
          <TbCheckupList className="text-2xl" />
          {!isCollapsed && <span>Realizar Test</span>}
        </a>
        <a
          onClick={() => navigate("/results")}
          className={`flex items-center py-2 space-x-3 px-4 hover:bg-primary-dark rounded-md w-full ${
            isCollapsed ? "justify-center" : ""
          }`}
        >
          <VscGraph className="text-2xl" />
          {!isCollapsed && <span>Resultados</span>}
        </a>
        <a
          onClick={() => navigate("/tips")}
          className={`flex items-center py-2 space-x-3 px-4 hover:bg-primary-dark rounded-md w-full ${
            isCollapsed ? "justify-center" : ""
          }`}
        >
          <MdOutlineTipsAndUpdates className="text-2xl" />
          {!isCollapsed && <span>Consejos y Recursos</span>}
        </a>
        <a
          onClick={() => navigate("/faqs")}
          className={`flex items-center py-2 space-x-3 px-4 hover:bg-primary-dark rounded-md w-full ${
            isCollapsed ? "justify-center" : ""
          }`}
        >
          <BsQuestionSquare className="text-2xl" />
          {!isCollapsed && <span>Preguntas frecuentes</span>}
        </a>
        <a
          onClick={() => navigate("/settings")}
          className={`flex items-center py-2 space-x-3 px-4 hover:bg-primary-dark rounded-md w-full ${
            isCollapsed ? "justify-center" : ""
          }`}
        >
          <MdOutlineSettings className="text-2xl" />
          {!isCollapsed && <span>Configuración</span>}
        </a>
        <div className="relative w-full">
          <button
            className={`flex items-center space-x-3 px-4 py-2 hover:bg-primary-dark rounded-md w-full ${
              isCollapsed ? "justify-center" : ""
            }`}
            onClick={() => setProfileMenuOpen(!isProfileMenuOpen)}
          >
            <CgProfile className="text-2xl" />
            {!isCollapsed && <span>Perfil</span>}
          </button>
          {!isCollapsed && isProfileMenuOpen && (
            <div className="absolute left-64 top-3 bg-white text-primary-dark rounded-md shadow w-40">
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
