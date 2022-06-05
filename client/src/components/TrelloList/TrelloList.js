import TrelloActionButton from "../TrelloActionButton/TrelloActionButton";
import TrelloCard from "../TrelloCard/TrelloCard";
import "./TrelloList.scss";
import { useState } from "react";
import Icon from "@mui/material/Icon";
import { useActions } from "../../hooks/useActions";

const TrelloList = ({ title, cards, listId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [listTitle, setListTitle] = useState(title);

  const { delListAC, editListAC } = useActions();

  const renderEditInput = () => {
    return (
      <form onSubmit={handleFinishEditing}>
        <input
          type="text"
          value={listTitle}
          onChange={handleChange}
          autoFocus
          onFocus={handleFocus}
          onBlur={handleFinishEditing}
          className="input-style"
        />
      </form>
    );
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  const handleChange = (e) => {
    e.preventDefault();
    setListTitle(e.target.value);
  };

  const handleFinishEditing = (e) => {
    setIsEditing(false);
    editListAC(listTitle, listId);
  };

  const handleDeleteList = () => {
    delListAC(listId);
    console.log("DEL");
  };

  return (
    <div className="container">
      <div>
        {isEditing ? (
          renderEditInput()
        ) : (
          <div className="title-container" onClick={() => setIsEditing(true)}>
            <h4 className="list-title">{title}</h4>
            <Icon
              className="delete-button-list"
              onClick={handleDeleteList}
              type="button"
            >
              delete
            </Icon>
          </div>
        )}
      </div>
      <div>
        {cards
          .filter((card) => card.listId === listId)
          .map((card, index) => (
            <TrelloCard key={card._id} text={card.text} index={index} />
          ))}

        <TrelloActionButton listId={listId} />
      </div>
    </div>
  );
};

export default TrelloList;
