import TrelloList from "./components/TrelloList/TrelloList";
import { useSelector } from "react-redux";
import "./App.scss";
import TrelloActionButton from "./components/TrelloActionButton/TrelloActionButton";
import { useEffect } from "react";
import { useActions } from "./hooks/useActions";

function App() {
  const lists = useSelector((state) => state.lists.lists);
  const cards = useSelector((state) => state.cards.cards);

  const { getListsAC, getCardsAC } = useActions();

  useEffect(() => {
    getListsAC();
    getCardsAC();
  }, []);

  return (
    <div className="listsContainer">
      {lists.map((list) => (
        <TrelloList title={list.title} cards={cards} listId={list._id} />
      ))}

      <TrelloActionButton list />
    </div>
  );
}

export default App;
