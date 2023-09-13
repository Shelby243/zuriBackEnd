import { Router } from "express";
import {
  createPerson,
  deletePerson,
  getAllPersons,
  getPerson,
  updatePerson,
} from "../controllers/personController.js";
import {
  validatePersonInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";
const router = Router();

router.route("/").get(getAllPersons).post(validatePersonInput, createPerson);
router
  .route("/:user_id")
  .get(validateIdParam, getPerson)
  .patch(validateIdParam, updatePerson)
  .delete(validateIdParam, deletePerson);
export default router;
