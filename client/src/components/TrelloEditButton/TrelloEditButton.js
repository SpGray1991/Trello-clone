import Button from "@mui/material/Button";
import "./TrelloEditButton.scss";

const TrelloEditButton = ({ children, onClick }) => {
  return (
    <Button className="edit-button" variant="contained" onMouseDown={onClick}>
      {children}
    </Button>
  );
};

export default TrelloEditButton;
