import { Router } from "express";
import * as autorController from "../controllers/autor.controller";
import {
  autorCreateSchema,
  autorUpdateSchema,
} from "../validations/autor.validation";
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
router.get("/", autorController.getAll);

router.get(
  "/:id",
  validateParams(idParamsSchema),
  autorController.getById
);

// Escrituras solo ADMIN
router.post(
  "/",
  authenticate,
  authorize("ADMIN"),
  validate(autorCreateSchema),
  autorController.create
);

router.put(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  validateParams(idParamsSchema),
  validate(autorUpdateSchema),
  autorController.update
);

router.delete(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  validateParams(idParamsSchema),
  autorController.remove
);

export default router;
