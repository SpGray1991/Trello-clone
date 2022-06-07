import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import "./TrelloCard.scss";
import { useState } from "react";
import React from "react";
import Icon from "@mui/material/Icon";
import TrelloFormEdit from "../TrelloFormEdit/TrelloFormEdit";
import TrelloEditButton from "../TrelloEditButton/TrelloEditButton";
import { useActions } from "../../hooks/useActions";
import { Draggable } from "react-beautiful-dnd";

const TrelloCard = React.memo(({ text, id, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [cardText, setText] = useState(text);

  const { delCardAC, editCardAC } = useActions();

  const closeForm = (e) => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const saveCard = (e) => {
    e.preventDefault();

    editCardAC(cardText, id);
    setIsEditing(false);
  };

  const handleDeleteCard = (e) => {
    delCardAC(id);
  };

  const renderEditForm = () => {
    return (
      <TrelloFormEdit
        text={cardText}
        onChange={handleChange}
        closeForm={closeForm}
      >
        <TrelloEditButton onClick={saveCard}>Save</TrelloEditButton>
      </TrelloFormEdit>
    );
  };

  const renderCard = () => {
    return (
      <Draggable draggableId={String(id)} index={index}>
        {(provided) => {
          return (
            <Card
              className="card-container"
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              onDoubleClick={() => setIsEditing(true)}
            >
              <Icon
                className="edit-button-card"
                onClick={() => setIsEditing(true)}
                fontSize="small"
              >
                edit
              </Icon>
              <Icon
                className="delete-button-card"
                fontSize="small"
                onMouseDown={handleDeleteCard}
              >
                delete
              </Icon>
              <CardContent>
                <Typography>{text}</Typography>
              </CardContent>
            </Card>
          );
        }}
      </Draggable>
    );
  };

  return isEditing ? renderEditForm() : renderCard();
});

export default TrelloCard;
