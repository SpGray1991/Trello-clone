import TrelloList from "./components/TrelloList/TrelloList";
import { useSelector } from "react-redux";
import "./App.scss";
import TrelloActionButton from "./components/TrelloActionButton/TrelloActionButton";
import { useState } from "react";
import TrelloForm from "./components/TrelloForm/TrelloForm";

function App() {
  const lists = useSelector((state) => state.lists);

  const [form, setForm] = useState(false);

  const openForm = () => {
    setForm(true);
  };

  const closeForm = (e) => {
    setForm(false);
  };

  return (
    <div className="listsContainer">
      {lists.map((list) => (
        <TrelloList title={list.title} cards={list.cards} />
      ))}
      {form ? (
        <TrelloForm list closeForm={closeForm} />
      ) : (
        <TrelloActionButton list openForm={openForm} />
      )}
    </div>
  );
}

export default App;
