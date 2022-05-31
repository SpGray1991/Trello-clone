import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import "./TrelloCard.scss";

const TrelloCard = ({ text }) => {
  return (
    <Card className="cardContainer">
      <CardContent>
        <Typography gutterBottom>{text}</Typography>
      </CardContent>
    </Card>
  );
};

export default TrelloCard;
