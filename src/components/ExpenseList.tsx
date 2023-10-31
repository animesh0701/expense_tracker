import React from "react";

const ExpenseList = () => {
  return (
    <div>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          data-bs-toggle="dropdown"
          type="button"
          id="categories"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Categories
        </button>
        <ul className="dropdown-menu" aria-labelledby="categories">
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
