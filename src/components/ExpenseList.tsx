import React from "react";

const ExpenseList = () => {
  return (
    <div className="d-flex align-content-around flex-column">
      <div className="dropdown d-flex mt-2 mb-4">
        <button
          className="btn btn-light dropdown-toggle border-secondary flex-fill d-flex justify-content-between align-items-center"
          data-bs-toggle="dropdown"
          type="button"
          id="categories"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          All Categories...
        </button>
        <ul
          className="dropdown-menu flex-fill w-100"
          aria-labelledby="categories"
        >
          <li>
            <a className="dropdown-item" href="#">
              Entertainment
            </a>
          </li>
        </ul>
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
          <tr>
            <td className="pt-3 pb-1">Milk</td>
            <td className="pt-3 pb-1">300</td>
            <td className="pt-3 pb-1">Grocery</td>
            <td>
              <button className="btn btn-outline-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <th scope="row" className="pt-2 pb-2">
              Total
            </th>
            <td className="pt-2 pb-2" colSpan={3}>
              300
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
