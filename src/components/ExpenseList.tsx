import React from "react";

const ExpenseList = () => {
  return (
    <div>
      <div className="dropdown d-flex p=40">
        <button
          className="btn btn-light dropdown-toggle border-dark flex-fill d-flex justify-content-between align-items-center"
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
          <li>
            <a className="dropdown-item" href="#">
              Bills
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Taxes
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExpenseList;
