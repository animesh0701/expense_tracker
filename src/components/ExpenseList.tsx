import React, { useState } from "react";

interface Props {
  items: { description: string; amount: number; category: string }[];
  handleClick: (key: string) => void;
}

const ExpenseList = ({ items, handleClick }: Props) => {
  return (
    <div className="d-flex align-content-around flex-column">
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
          {items.map((item) => (
            <tr key={item.description}>
              <td className="pt-3 pb-1">{item.description}</td>
              <td className="pt-3 pb-1">${item.amount.toFixed(2)}</td>
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
          ))}
          <tr>
            <th scope="row" className="pt-2 pb-2">
              Total
            </th>
            <td className="pt-2 pb-2" colSpan={3}>
              ${items.reduce((acc, item) => item.amount + acc, 0).toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
