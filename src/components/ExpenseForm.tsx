import React from "react";

const ExpenseForm = () => {
  return (
    <form className="mb-5 mt-4">
      <div className="mb-3 form-group">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input id="description" type="text" className="form-control" />
      </div>
      <div className="mb-3 form-group">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input id="amount" type="number" className="form-control" />
      </div>
      <div className="mb-3 form-group">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select className="form-select" name="category" id="category">
          <option selected>Select Category...</option>
          <option value="Grocery">Grocery</option>
          <option value="Greocery">Groecery</option>
        </select>
      </div>
      <button className="btn btn-primary mt-2" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
