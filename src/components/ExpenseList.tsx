import React, { useState } from "react";

interface Props {
  items: { description: string; amount: number; category: string }[];
  handleClick: (key: string) => void;
}

const ExpenseList = ({ items, handleClick }: Props) => {
  const [filter, setFilter] = useState("All categories");

  const amounts =
    filter === "All categories"
      ? items.map((item) => {
          return item.amount;
        })
      : items.map((item) => {
          if (item.category === filter) return item.amount;
          else return 0;
        });
  const total = amounts.reduce((total, amount) => total + amount, 0);

  return (
    <div className="d-flex align-content-around flex-column">
      <div className="mt-2 mb-4">
        <select
          className="form-select"
          name="category"
          id="category"
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        >
          <option defaultValue="none">All categories</option>
          <option value="Grocery">Grocery</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Bills">Bills</option>
          <option value="Taxes">Taxes</option>
          <option value="Services">Services</option>
          <option value="Shopping">Shopping</option>
        </select>
      </div>

      <table className="table table-bordered border-secondary mb-2 p-2">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {filter === "All categories"
            ? items.map((item) => (
                <tr key={item.description}>
                  <td className="pt-3 pb-1">{item.description}</td>
                  <td className="pt-3 pb-1">{item.amount}</td>
                  <td className="pt-3 pb-1">{item.category}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleClick(item.description);
                      }}
                      className="btn btn-outline-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            : items.map(
                (item) =>
                  filter === item.category && (
                    <tr key={item.description}>
                      <td className="pt-3 pb-1">{item.description}</td>
                      <td className="pt-3 pb-1">{item.amount}</td>
                      <td className="pt-3 pb-1">{item.category}</td>
                      <td>
                        <button
                          onClick={() => {
                            handleClick(item.description);
                          }}
                          className="btn btn-outline-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  )
              )}
          <tr>
            <th scope="row" className="pt-2 pb-2">
              Total
            </th>
            <td className="pt-2 pb-2" colSpan={3}>
              {total}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
