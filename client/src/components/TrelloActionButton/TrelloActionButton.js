import Icon from "@mui/material/Icon";
import "./TrelloActionButton.scss";

function TrelloActionButton(props) {
  const buttonText = props.list ? "Add another list" : "Add another card";

  return (
    <div className="openForButtonGroup">
      <Icon>add</Icon>
      <p>{buttonText}</p>
    </div>
  );
}

export default TrelloActionButton;
