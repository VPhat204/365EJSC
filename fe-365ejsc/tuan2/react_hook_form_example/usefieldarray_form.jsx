import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

export default function FieldArrayExample() {
  const { control, handleSubmit, register } = useForm({
    defaultValues: { users: [{ name: "" }] },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "users",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>useFieldArray Example</h3>
      {fields.map((item, index) => (
        <div key={item.id}>
          <input {...register(`users.${index}.name`)} placeholder="User name" />
          <button type="button" onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={() => append({ name: "" })}>
        Add User
      </button>
      <button type="submit">Submit</button>
    </form>
  );
}
