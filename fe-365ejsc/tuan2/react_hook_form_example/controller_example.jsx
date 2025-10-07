import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

export default function ControllerExample() {
  const { control, handleSubmit } = useForm();

  const options = [
    { value: "frontend", label: "Frontend Developer" },
    { value: "backend", label: "Backend Developer" },
    { value: "fullstack", label: "Fullstack Developer" },
  ];

  const onSubmit = (data) => console.log("Kết quả:", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Chọn vị trí:</label>
      <Controller
        name="position"
        control={control}
        rules={{ required: "Vui lòng chọn vị trí" }}
        render={({ field }) => <Select {...field} options={options} />}
      />
      <button type="submit">Xác nhận</button>
    </form>
  );
}
