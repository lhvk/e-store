import { messages } from "../../../messages";
import * as yup from "yup";

export const schema = yup
  .object({
    fullName: yup
      .string()
      .min(3, messages.fullNameError)
      .max(30, messages.fullNameError)
      .required(messages.fullNameError),
    subject: yup
      .string()
      .min(3, messages.subjectError)
      .max(30, messages.subjectError)
      .required(messages.subjectError),
    email: yup
      .string()
      .email(messages.emailError)
      .required(messages.emailError),
    message: yup
      .string()
      .min(3, messages.messageError)
      .max(200, messages.messageError)
      .required(messages.messageError),
  })
  .required();
