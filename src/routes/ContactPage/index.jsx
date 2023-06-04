import React from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Button, Flex } from "../../components";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { messages } from "../../messages";
import { ContactForm, InputField, TextField } from "./index.styles";
import { useMediaQuery } from "../../hooks";
import { formSuccess } from "../../utils";

export function ContactPage() {
  const isMobile = useMediaQuery("(max-width: 480px)");
  const schema = yup
    .object({
      fullName: yup.string().min(3, messages.fullNameError).max(30, messages.fullNameError).required(messages.fullNameError),
      subject: yup.string().min(3, messages.subjectError).max(30, messages.subjectError).required(messages.subjectError),
      email: yup.string().email(messages.emailError).required(messages.emailError),
      message: yup.string().min(3, messages.messageError).max(200, messages.messageError).required(messages.messageError),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(data) {
    console.log(data);
    reset();
    formSuccess();
  }

  return (
    <>
      <Helmet>
        <title>E-store | Contact</title>
      </Helmet>

      <main>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center">
          <h1 style={{ textAlign: "center" }}>Contact us</h1>
          <ContactForm
            onSubmit={handleSubmit(onSubmit)}
            isMobile={isMobile}>
            <InputField
              isError={errors.fullName}
              type="text"
              placeholder="Full name"
              {...register("fullName", {
                required: true,
                minLength: 3,
                maxLength: 30,
              })}
            />
            <p>{errors.fullName?.message}</p>
            <InputField
              isError={errors.subject}
              type="text"
              placeholder="Subject"
              {...register("subject", {
                required: true,
                minLength: 3,
                maxLength: 30,
              })}
            />
            <p>{errors.subject?.message}</p>
            <InputField
              isError={errors.email}
              type="email"
              placeholder="Email"
              {...register("email", {
                required: true,
              })}
            />
            <p>{errors.email?.message}</p>
            <TextField
              cols="30"
              rows="10"
              isError={errors.message}
              type="text"
              placeholder="Message"
              {...register("message", {
                required: true,
                minLength: 3,
                maxLength: 200,
              })}
            />
            <p>{errors.message?.message}</p>
            <Button
              type="submit"
              primary>
              Submit
            </Button>
          </ContactForm>
        </Flex>
      </main>
    </>
  );
}
