import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";

export const categories = [
  "Grocery",
  "Entertainment",
  "Bills",
  "Taxes",
  "Services",
  "Shopping",
];

function App() {
  const [list, setList] = useState([
    {
      description: "Cookie",
      amount: 75,
      category: "Grocery",
    },
    {
      description: "Water Bill",
      amount: 25,
      category: "Bills",
    },
    {
      description: "Milk",
      amount: 15,
      category: "Grocery",
    },
    {
      description: "Movie Tickets",
      amount: 5,
      category: "Entertainment",
    },
  ]);
  const [filter, setFilter] = useState("All categories");

  //Set category Filter
  const Category = (category: string) => {
    setFilter(category);
  };

  //update Table
  const updateList = (data: {
    description: string;
    amount: number;
    category: string;
  }) => {
    setList([...list, data]);
  };

  //Delete Handler
  const clickHandler = (key: string) => {
    setList(list.filter((item) => item.description !== key));
  };

  const expenses =
    filter === "All categories"
      ? list
      : list.filter((item) => item.category === filter);

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm formInput={updateList} />
      <ExpenseFilter OnSelectCategory={Category} />
      <ExpenseList items={expenses} handleClick={clickHandler} />
    </div>
  );
}

export default App;
