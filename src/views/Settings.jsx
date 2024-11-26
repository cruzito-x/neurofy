import { useState } from "react";
import Sidebar from "../components/Sidebar";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [faqAccess, setFaqAccess] = useState(true);

  return (
    <div className="flex">
    <Sidebar />
    <div
      className={`ml-64 w-full ${
        darkMode ? "bg-primary-dark text-white" : "text-black"
      } min-h-screen flex flex-col`}
    >
      <main className="flex-grow p-4 space-y-6">
        <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg dark:bg-gray-800">
          <span>Modo oscuro</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <div className="w-11 h-6 bg-primary-dark rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-light"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-4 rounded-lg">
          <label>Permitir acceso a <span className="font-bold"> "Preguntas Frecuentes" </span></label>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={faqAccess}
              onChange={() => setFaqAccess(!faqAccess)}
            />
            <div className="w-11 h-6 bg-primary-dark rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-light"></div>
          </label>
        </div>
      </main>

      <footer className="p-4">
        <button className="w-full py-2 px-4 bg-primary border-2 border-primary-dark text-white rounded-lg hover:bg-primary-dark">
          Guardar
        </button>
      </footer>
    </div>
    </div>
  );
}

export default Settings;