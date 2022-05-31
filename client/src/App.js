import TrelloList from "./components/TrelloList/TrelloList";
import { useSelector } from "react-redux";
import "./App.scss";
import TrelloActionButton from "./components/TrelloActionButton/TrelloActionButton";

function App() {
  const lists = useSelector((state) => state.lists);

  return (
    <div className="listsContainer">
      {lists.map((list) => (
        <TrelloList title={list.title} cards={list.cards} />
      ))}

      <TrelloActionButton list />
    </div>
  );
}

export default App;
