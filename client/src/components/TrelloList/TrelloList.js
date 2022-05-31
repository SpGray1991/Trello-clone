import TrelloActionButton from "../TrelloActionButton/TrelloActionButton";
import TrelloCard from "../TrelloCard/TrelloCard";
import "./TrelloList.scss";
import { useState } from "react";
import TrelloForm from "../TrelloForm/TrelloForm";

const TrelloList = ({ title, cards }) => {
  const [form, setForm] = useState(false);

  const openForm = () => {
    setForm(true);
  };

  const closeForm = (e) => {
    setForm(false);
  };

  return (
    <div className="container">
      <h1>{title}</h1>
      {cards.map((card) => (
        <TrelloCard key={card.id} text={card.text} />
      ))}
      {form ? (
        <TrelloForm closeForm={closeForm} />
      ) : (
        <TrelloActionButton openForm={openForm} />
      )}
    </div>
  );
};

export default TrelloList;
