import { useState } from "react";
import TrelloForm from "../TrelloForm/TrelloForm";
import TrelloButton from "../TrelloButton/TrelloButton";

const TrelloActionButton = ({ list, listId }) => {
  const [form, setForm] = useState(false);

  const openForm = () => {
    setForm(true);
  };

  const closeForm = (e) => {
    setForm(false);
  };
  return (
    <div>
      {form ? (
        <TrelloForm list={list} closeForm={closeForm} listId={listId} />
      ) : (
        <TrelloButton list={list} openForm={openForm} />
      )}
    </div>
  );
};

export default TrelloActionButton;
