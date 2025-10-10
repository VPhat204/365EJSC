import { useForm, useWatch } from "react-hook-form";

export default function WatchExample() {
  const { register, control } = useForm({
    defaultValues: { name: "" },
  });

  const name = useWatch({
    control,
    name: "name",
  });

  return (
    <div>
      <h3>useWatch Example</h3>
      <input {...register("name")} placeholder="Type your name" />
      <p>Live value: {name}</p>
    </div>
  );
}
