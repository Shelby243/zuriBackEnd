import { body, param, validationResult } from "express-validator";
import { NotFoundError, BadRequestError } from "../errors/customError.js";
import mongoose from "mongoose";
import Person from "../models/Person.js";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        if (errorMessages[0].startsWith("no person")) {
          throw new NotFoundError(errorMessages);
        }
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validatePersonInput = withValidationErrors([
  body("name").notEmpty().withMessage("name is required"),
  body("country").notEmpty().withMessage("country is required"),
  body("track").notEmpty().withMessage("track is required"),
]);

export const validateIdParam = withValidationErrors([
  param("user_id").custom(async (value, { req }) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidId) throw new BadRequestError("invalid MongoDB id");
    const person = await Person.findById(value);
    if (!person) throw new NotFoundError(`no person with id ${value}`);
  }),
]);
