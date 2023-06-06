import { useForm } from "react-hook-form";
import { useMediaQuery } from "../../hooks";
import { formSuccess } from "../../utils";
import { Button } from "../Buttons";
import { FormContainer, InputField, TextField } from "./index.styles";
import { yupResolver } from "@hookform/resolvers/yup";

export function ContactForm({ schema }) {
  const isMobile = useMediaQuery("(max-width: 480px)");
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
    <FormContainer
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
    </FormContainer>
  );
}
