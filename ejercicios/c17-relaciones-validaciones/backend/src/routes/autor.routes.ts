import { Router } from "express";
import * as autorController from "../controllers/autor.controller";
import {
  validate,
  validateParams,
} from "../middlewares/validate";
import {
  autorCreateSchema,
  autorUpdateSchema,
} from "../validations/autor.validation";
import { idParamsSchema } from "../validations/params.validation";

const router = Router();

router.get("/", autorController.getAll);

router.get(
  "/:id",
  validateParams(idParamsSchema),
  autorController.getById
);

router.post(
  "/",
  validate(autorCreateSchema),
  autorController.create
);

router.put(
  "/:id",
  validateParams(idParamsSchema),
  validate(autorUpdateSchema),
  autorController.update
);

router.delete(
  "/:id",
  validateParams(idParamsSchema),
  autorController.remove
);

export default router;