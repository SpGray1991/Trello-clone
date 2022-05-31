import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Textarea from "react-textarea-autosize";
import { useState } from "react";
import "./TrelloForm.scss";
import Icon from "@mui/material/Icon";

const TrelloForm = ({ list, closeForm }) => {
  const [text, setText] = useState("");

  const placeholder = list
    ? "Enter list title..."
    : "Enter a title for this card...";

  const handleInputChange = (e) => {
    setText(e.target.value);
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
        />
      </Card>
      <div className="formButtonGroup">
        <Button className="bbbb" variant="contained">
          {buttonTitle}
        </Button>
        <Icon className="closeBtn">close</Icon>
      </div>
    </div>
  );
};

export default TrelloForm;
