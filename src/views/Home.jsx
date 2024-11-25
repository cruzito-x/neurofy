import { useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { TbCheckupList } from "react-icons/tb";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 w-full">
        <div className="flex flex-col items-center justify-center h-96">
          <img src={logo} alt="Neurofy Logo" className="w-52 pt-10" />
          <h1 className="text-2xl font-bold pt-5 text-primary-dark">Neurofy</h1>
          <p className="text-primary-dark">
            Soluciones integrales al servicio de la neurodiversidad
          </p>
        </div>
        <div className="flex pt-24">
          <div className="flex flex-col items-center justify-center w-full h-full">
            <button
              type="button"
              className="flex w-96 h-16 justify-center rounded-md bg-primary-light border-primary border-2 text-white px-3 py-4 text-lg font-semibold shadow-sm hover:bg-primary-dark"
              onClick={() => navigate("/test")}
            >
              <TbCheckupList className="text-3xl" />
              Realizar Test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
