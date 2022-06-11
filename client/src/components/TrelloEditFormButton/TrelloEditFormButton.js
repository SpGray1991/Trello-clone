import Button from "@mui/material/Button";

const TrelloEditFormButton = ({ children, onClick }) => {
  return (
    <Button variant="contained" onMouseDown={onClick}>
      {children}
    </Button>
  );
};

export default TrelloEditFormButton;
