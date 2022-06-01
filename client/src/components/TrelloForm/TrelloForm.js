import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Textarea from "react-textarea-autosize";
import { useState } from "react";
import "./TrelloForm.scss";
import Icon from "@mui/material/Icon";
import { useActions } from "../../hooks/useActions";

const TrelloForm = ({ list, closeForm, listId }) => {
  const [text, setText] = useState("");

  const { addListAC, addCardAC } = useActions();

  const placeholder = list
    ? "Enter list title..."
    : "Enter a title for this card...";

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleAddList = () => {
    if (text) {
      addListAC(text);
    }
  };

  const handleAddCard = () => {
    if (text) {
      addCardAC(text, listId);
    }
    console.log("listID", listId);
  };

  const buttonTitle = list ? "Add List" : "Add Card";

  return (
    <div>
      <Card className="cardForm">
        <Textarea
          placeholder={placeholder}
          autoFocus
          onBlur={closeForm}
          value={text}
          onChange={handleInputChange}
          className="textarea"
          name="title"
        />
      </Card>
      <div className="formButtonGroup">
        <Button
          className="bbbb"
          variant="contained"
          onMouseDown={list ? handleAddList : handleAddCard}
        >
          {buttonTitle}
        </Button>
        <Icon className="closeBtn">close</Icon>
      </div>
    </div>
  );
};

export default TrelloForm;
