import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { apiFetch } from "../services/api";
import { guardarToken } from "../services/sesion";
import { loginSchema } from "../schemas/loginSchema";

type LoginResponse = {
  token: string;
  usuario: {
    id: number;
    email: string;
    nombre: string;
    rol: string;
  };
};

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    setError(null);

    const resultado = loginSchema.safeParse({
      email,
      password,
    });

    if (!resultado.success) {
      setError(resultado.error.issues[0].message);
      return;
    }

    try {
      setEnviando(true);

      const respuesta = await apiFetch<LoginResponse>(
        "/auth/login",
        {
          method: "POST",
          body: JSON.stringify(resultado.data),
        }
      );

      guardarToken(respuesta.token);

      navigate("/");
    } catch (e) {
      setError(
        e instanceof Error ? e.message : "Error al iniciar sesión"
      );
    } finally {
      setEnviando(false);
    }
  }

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="mb-4">Iniciar sesión</h2>

      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>

          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>

          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button type="submit" disabled={enviando}>
          {enviando ? "Ingresando..." : "Ingresar"}
        </Button>
      </Form>
    </div>
  );
}

export default Login;