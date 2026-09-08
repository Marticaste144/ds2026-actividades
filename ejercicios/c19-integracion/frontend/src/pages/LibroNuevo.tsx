import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  Form,
  Button,
  Container,
} from "react-bootstrap";

import { libroSchema } from "../schemas/libroSchema";
import { apiFetch } from "../services/api";

function LibroNuevo() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    titulo: "",
    precio: "",
    imagen: "",
    disponible: true,
    autorId: "",
  });

  const [errores, setErrores] = useState<Record<string, string>>({});
  const [errorApi, setErrorApi] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setErrores({});
    setErrorApi(null);

    const resultado = libroSchema.safeParse(form);

    if (!resultado.success) {
      const nuevosErrores: Record<string, string> = {};

      for (const issue of resultado.error.issues) {
        const campo = String(issue.path[0]);

        if (!nuevosErrores[campo]) {
          nuevosErrores[campo] = issue.message;
        }
      }

      setErrores(nuevosErrores);
      return;
    }

    try {
      setEnviando(true);

      await apiFetch("/libros", {
        method: "POST",
        body: JSON.stringify({
          ...resultado.data,
          categoriaIds: [],
        }),
      });

      navigate("/catalogo");
    } catch (e) {
      setErrorApi(
        e instanceof Error
          ? e.message
          : "Error al crear el libro"
      );
    } finally {
      setEnviando(false);
    }
  };

  return (
    <Container className="py-4" style={{ maxWidth: 480 }}>
      <h2 className="mb-4">Nuevo libro</h2>

      {errorApi && (
        <Alert variant="danger">
          {errorApi}
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Título</Form.Label>

          <Form.Control
            name="titulo"
            value={form.titulo}
            onChange={handleChange}
            isInvalid={!!errores.titulo}
          />

          <Form.Control.Feedback type="invalid">
            {errores.titulo}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Precio</Form.Label>

          <Form.Control
            type="number"
            name="precio"
            value={form.precio}
            onChange={handleChange}
            isInvalid={!!errores.precio}
          />

          <Form.Control.Feedback type="invalid">
            {errores.precio}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>URL de imagen</Form.Label>

          <Form.Control
            name="imagen"
            value={form.imagen}
            onChange={handleChange}
            isInvalid={!!errores.imagen}
          />

          <Form.Control.Feedback type="invalid">
            {errores.imagen}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>ID del autor</Form.Label>

          <Form.Control
            type="number"
            name="autorId"
            value={form.autorId}
            onChange={handleChange}
            isInvalid={!!errores.autorId}
          />

          <Form.Control.Feedback type="invalid">
            {errores.autorId}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Check
          className="mb-3"
          label="Disponible"
          name="disponible"
          checked={form.disponible}
          onChange={handleChange}
        />

        <Button type="submit" disabled={enviando}>
          {enviando ? "Guardando..." : "Agregar libro"}
        </Button>
      </Form>
    </Container>
  );
}

export default LibroNuevo;