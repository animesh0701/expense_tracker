import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "description must be at least 3 characters" }),
  amount: z
    .number({ invalid_type_error: "amount is required" })
    .min(1, { message: "amount must be greater than 0" }),
  category: z.string().refine((val) => val !== "Choose a category...", {
    message: "Choose a valid category",
  }),
});

//interfacing type with zod
type FormData = z.infer<typeof schema>;

interface Props {
  formInput: (arg: {
    description: string;
    amount: number;
    category: string;
  }) => void;
}

const ExpenseForm = ({ formInput }: Props) => {
  //react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  //to pass data back to the parent component
  const submitHandler = (data: FieldValues) =>
    formInput({
      description: data.description,
      amount: data.amount,
      category: data.category,
    });

  return (
    <form className="mb-5 mt-4" onSubmit={handleSubmit(submitHandler)}>
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
          <option value="Grocery">Grocery</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Bills">Bills</option>
          <option value="Taxes">Taxes</option>
          <option value="Services">Services</option>
          <option value="Shopping">Shopping</option>
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
