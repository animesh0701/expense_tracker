import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [list, setList] = useState([
    {
      description: "Cookie",
      amount: 75,
      category: "Grocery",
    },
  ]);

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

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm formInput={updateList} />
      <ExpenseList items={list} handleClick={clickHandler} />
    </div>
  );
}

export default App;
