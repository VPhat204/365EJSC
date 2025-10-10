import React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

function InputChild() {
  const { register } = useFormContext();
  return <input {...register("address")} placeholder="Address" />;
}

export default function FormContextExample() {
  const methods = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <h3>useFormContext Example</h3>
        <InputChild />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
}
