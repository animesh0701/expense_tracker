import React from "react";
import { useForm, FieldValues } from "react-hook-form";

interface Props {
  formInput: (arg: {
    description: string;
    amount: number;
    category: string;
  }) => void;
}

const ExpenseForm = ({ formInput }: Props) => {
  const { register, handleSubmit } = useForm();
  const submitHandler = (data: FieldValues) =>
    formInput({
      description: data.description,
      amount: parseInt(data.amount),
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
      </div>
      <div className="mb-3 form-group">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount")}
          id="amount"
          type="number"
          className="form-control"
        />
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
          <option defaultValue="Choose a category...">
            Choose a category...
          </option>
          <option value="Grocery">Grocery</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>
      <button className="btn btn-primary mt-2" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
