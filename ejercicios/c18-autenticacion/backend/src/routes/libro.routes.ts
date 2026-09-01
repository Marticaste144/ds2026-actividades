import { Router } from "express";
import * as libroController from "../controllers/libro.controller";
import {
  libroCreateSchema,
  libroUpdateSchema,
} from "../validations/libro.validation";
import { idParamsSchema } from "../validations/params.validation";
import {
  validate,
  validateParams,
} from "../middlewares/validate";
import {
  authenticate,
  authorize,
} from "../middlewares/auth.middleware";

const router = Router();

// Lecturas públicas
router.get("/", libroController.getAll);

router.get(
  "/:id",
  validateParams(idParamsSchema),
  libroController.getById
);

// Escrituras solo ADMIN
router.post(
  "/",
  authenticate,
  authorize("ADMIN"),
  validate(libroCreateSchema),
  libroController.create
);

router.put(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  validateParams(idParamsSchema),
  validate(libroUpdateSchema),
  libroController.update
);

router.delete(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  validateParams(idParamsSchema),
  libroController.remove
);

export default router;
