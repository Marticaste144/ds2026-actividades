import { Router } from "express";
import * as libroController from "../controllers/libro.controller";
import {
  validate,
  validateParams,
} from "../middlewares/validate";
import {
  libroCreateSchema,
  libroUpdateSchema,
} from "../validations/libro.validation";
import { idParamsSchema } from "../validations/params.validation";

const router = Router();

router.get("/", libroController.getAll);

router.get(
  "/:id",
  validateParams(idParamsSchema),
  libroController.getById
);

router.post(
  "/",
  validate(libroCreateSchema),
  libroController.create
);

router.put(
  "/:id",
  validateParams(idParamsSchema),
  validate(libroUpdateSchema),
  libroController.update
);

router.delete(
  "/:id",
  validateParams(idParamsSchema),
  libroController.remove
);

export default router;