import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "./assets/img/logo.png";
import googleLogo from "./assets/img/google.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      Swal.fire({
        title: "Error",
        text: "Por favor, introduzca un usuario y su contraseña.",
        icon: "error",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#0066DE",
      });
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.status !== 200) {
        Swal.fire({
          title: "Error",
          text: data.message,
          icon: data.icon || "error",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "#0066DE",
        });
      } else {
        Swal.fire({
          text: data.message,
          icon: data.icon,
          confirmButtonText: "Aceptar",
          confirmButtonColor: "#0066DE",
        }).then(() => {
          navigate('/home');
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Ha ocurrido un problema con el servidor. Intente nuevamente más tarde.",
        icon: "error",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#0066DE",
      });
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Neurofy Logo"
          src={logo}
          className="mx-auto h-36 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-primary-dark">
          Neurofy
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Correo Electrónico
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                className="block w-full border-b-2 border-secondary bg-secondary-lightest py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                placeholder="Introduzca su correo electrónico"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900"
            >
              Contraseña
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                className="block w-full border-b-2 border-secondary bg-secondary-lightest py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                placeholder="Introduzca su contraseña"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-primary-light border-primary border-2 text-white px-3 py-1.5 text-sm font-semibold shadow-sm hover:bg-primary-dark"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm">
          O puedes iniciar sesión con <br />
          <a href="#" className="flex justify-center">
            <img src={googleLogo} className="h-12 w-auto" alt="Google Logo" />
          </a>
        </p>
        <p className="mt-10 text-center text-sm">
          ¿No te has registrado? Haz clic{" "}
          <a
            href="#"
            className="font-semibold text-primary-dark hover:text-indigo-500"
          >
            aquí
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
