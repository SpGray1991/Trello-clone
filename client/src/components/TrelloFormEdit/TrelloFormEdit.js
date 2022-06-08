import React from "react";
import Textarea from "react-textarea-autosize";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import "./TrelloFormEdit.scss";

const TrelloFormEdit = React.memo(
  ({ text = "", onChange, closeForm, children }) => {
    const handleFocus = (e) => {
      e.target.select();
    };

    return (
      <div className="container-edit-form">
        <Card className="wrapper-textarea">
          <Textarea
            autoFocus
            onFocus={handleFocus}
            value={text}
            onChange={(e) => onChange(e)}
            onBlur={closeForm}
            className="textarea-edit"
          />
        </Card>
        <div className="button-container">
          {children}
          <Icon className="close" onMouseDown={closeForm}>
            close
          </Icon>
        </div>
      </div>
    );
  }
);

export default TrelloFormEdit;
