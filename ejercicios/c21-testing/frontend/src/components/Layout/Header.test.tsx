import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach } from "vitest";

import Header from "./Header";
import { useAuth } from "../../context/AuthContext";

vi.mock("../../context/AuthContext", () => ({
  useAuth: vi.fn(),
}));

const useAuthMock = vi.mocked(useAuth);

function configurarUsuario(
  usuario: { id: number; nombre: string; email: string; rol: "ADMIN" | "CLIENTE" } | null
) {
  useAuthMock.mockReturnValue({
    usuario,
    cargando: false,
    estaAutenticado: usuario !== null,
    tieneRol: (rol) => usuario?.rol === rol,
    login: vi.fn(),
    logout: vi.fn(),
  });
}

function mostrarHeader() {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
}

describe("Header según el rol del usuario", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it("muestra Nuevo libro para ADMIN", () => {
    configurarUsuario({
      id: 1,
      nombre: "Admin", email: "admin@test.com",
      rol: "ADMIN",
    });

    mostrarHeader();

    expect(screen.getByText("Nuevo libro")).toBeInTheDocument();
    expect(screen.getByText("Hola, Admin")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Salir" })).toBeInTheDocument();
  });

  it("oculta Nuevo libro para CLIENTE", () => {
    configurarUsuario({
      id: 2,
      nombre: "Cliente", email: "cliente@test.com",
      rol: "CLIENTE",
    });

    mostrarHeader();

    expect(screen.queryByText("Nuevo libro")).not.toBeInTheDocument();
    expect(screen.getByText("Hola, Cliente")).toBeInTheDocument();
  });

  it("muestra Ingresar cuando no hay sesión", () => {
    configurarUsuario(null);

    mostrarHeader();

    expect(screen.queryByText("Nuevo libro")).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Ingresar" })).toBeInTheDocument();
  });
});

