import Button from "@mui/material/Button";
import "./TrelloEditFormButton.scss";

const TrelloEditFormButton = ({ children, onClick }) => {
  return (
    <Button className="edit-button" variant="contained" onMouseDown={onClick}>
      {children}
    </Button>
  );
};

export default TrelloEditFormButton;
