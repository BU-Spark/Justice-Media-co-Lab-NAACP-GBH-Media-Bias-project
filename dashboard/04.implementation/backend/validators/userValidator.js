import yup from 'yup';

import { validate } from './index.js';

const passwordValidator = yup.string().min(6, 'Password should be at least 6 characters long');
const emailValidator = yup
  .string()
  .trim()
  .email('Invalid email supplied');

export const nameValidator = yup.string().trim().min(2, 'Name should be at least 2 characters long').max(40);

export const loginValidator = validate({ email: emailValidator.required(), password: passwordValidator.required() });
export const registerValidator = validate({ email: emailValidator.required(), password: passwordValidator.required(), name: nameValidator.required() });