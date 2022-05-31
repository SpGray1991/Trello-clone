import Icon from "@mui/material/Icon";
import "./TrelloActionButton.scss";

function TrelloActionButton({ openForm, list }) {
  const buttonText = list ? "Add another list" : "Add another card";

  return (
    <div className="openForButtonGroup" onClick={openForm}>
      <Icon>add</Icon>
      <p>{buttonText}</p>
    </div>
  );
}

export default TrelloActionButton;
