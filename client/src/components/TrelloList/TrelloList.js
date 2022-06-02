import TrelloActionButton from "../TrelloActionButton/TrelloActionButton";
import TrelloCard from "../TrelloCard/TrelloCard";
import "./TrelloList.scss";

const TrelloList = ({ title, cards, listId }) => {
  return (
    <div className="container">
      <h1>{title}</h1>
      {cards
        .filter((card) => card.listId === listId)
        .map((card) => (
          <TrelloCard key={card._id} text={card.text} />
        ))}
      <TrelloActionButton listId={listId} />
    </div>
  );
};

export default TrelloList;
