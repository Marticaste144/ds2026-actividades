import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import type { ReactNode } from "react";

import { apiFetch } from "../services/api";
import {
  borrarToken,
  guardarToken,
  obtenerToken,
} from "../services/sesion";

import type {
  Credenciales,
  Rol,
  Sesion,
  Usuario,
} from "../types/sesionType";

interface AuthContextType {
  usuario: Usuario | null;
  cargando: boolean;
  estaAutenticado: boolean;
  tieneRol: (rol: Rol) => boolean;
  login: (credenciales: Credenciales) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [cargando, setCargando] = useState(obtenerToken() !== null);

  useEffect(() => {
    if (!obtenerToken()) return;

    apiFetch<Usuario>("/auth/yo")
      .then(setUsuario)
      .catch(() => borrarToken())
      .finally(() => setCargando(false));
  }, []);

  useEffect(() => {
    window.addEventListener("sesion-expirada", logout);

    return () => {
      window.removeEventListener("sesion-expirada", logout);
    };
  }, []);

  async function login(credenciales: Credenciales) {
    const sesion = await apiFetch<Sesion>("/auth/login", {
      method: "POST",
      body: JSON.stringify(credenciales),
    });

    guardarToken(sesion.token);
    setUsuario(sesion.usuario);
  }

  function logout() {
    borrarToken();
    setUsuario(null);
  }

  const estaAutenticado = usuario !== null;

  function tieneRol(rol: Rol) {
    return usuario?.rol === rol;
  }

  return (
    <AuthContext.Provider
      value={{
        usuario,
        cargando,
        estaAutenticado,
        tieneRol,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth debe usarse dentro de <AuthProvider>");
  }

  return context;
}

