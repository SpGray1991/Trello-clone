import TrelloList from "./components/TrelloList/TrelloList";
import { useSelector } from "react-redux";
import "./App.scss";
import TrelloActionButton from "./components/TrelloActionButton/TrelloActionButton";
import { useEffect } from "react";
import { useActions } from "./hooks/useActions";

function App() {
  const lists = useSelector((state) => state.lists.lists);

  const { getListsAC } = useActions();

  useEffect(() => {
    getListsAC();
  }, []);

  return (
    <div className="listsContainer">
      {lists.map((list) => (
        <TrelloList title={list.title} /* cards={list.cards} */ />
      ))}

      <TrelloActionButton list />
    </div>
  );
}

export default App;
