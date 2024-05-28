import { body } from "express-validator";

export const registerValidation = [
  body("email", "Не правильний формат пошти").isEmail(),
  body("password", "Пароль має містити мінімум 5 символів").isLength({
    min: 6,
  }),
  body("fullName", "Імя має містити мінімум 3 символів").isLength({ min: 3 }),
  body("avatarUrl", "Не правильний формат посилання на фото")
    .optional()
    .isURL(),
];
export const loginValidation = [
  body("email", "Не правильний формат пошти").isEmail(),
  body("password", "Пароль має містити мінімум 5 символів").isLength({
    min: 6,
  }),
];
