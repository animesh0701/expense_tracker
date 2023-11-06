import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { categories } from "../App";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "description must be at least 3 characters" }),
  amount: z
    .number({ invalid_type_error: "amount is required" })
    .min(0.01, { message: "amount must be greater than 0" }),
  category: z.string().refine((val) => val !== "Choose a category...", {
    message: "Choose a valid category",
  }),
});

//interfacing type with zod
type FormData = z.infer<typeof schema>;

interface Props {
  formInput: (arg: FormData) => void;
}

const ExpenseForm = ({ formInput }: Props) => {
  //react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <form
      className="mb-5 mt-4"
      onSubmit={handleSubmit((data) => {
        formInput(data);
        reset();
      })}
    >
      <div className="mb-3 form-group">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3 form-group">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3 form-group">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          {...register("category")}
          className="form-select"
          name="category"
          id="category"
        >
          <option defaultValue="none">Choose a category...</option>
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button
        disabled={!isValid}
        className="btn btn-primary mt-2"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
