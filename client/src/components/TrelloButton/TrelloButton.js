import Icon from "@mui/material/Icon";
import "./TrelloButton.scss";

function TrelloButton({ openForm, list }) {
  const buttonText = list ? "Add another list" : "Add another card";

  return (
    <div className="openForButtonGroup" onClick={openForm}>
      <Icon>add</Icon>
      <p>{buttonText}</p>
    </div>
  );
}

export default TrelloButton;
