import React from "react";
import { useState } from "react";
import { categories } from "../App";

interface Props {
  OnSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ OnSelectCategory }: Props) => {
  return (
    <div className="mt-2 mb-4">
      <select
        className="form-select"
        name="category"
        id="category"
        onChange={(e) => {
          OnSelectCategory(e.target.value);
        }}
      >
        <option defaultValue="none">All categories</option>
        {categories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
