import TrelloList from "./components/TrelloList/TrelloList";
import { useSelector } from "react-redux";
import "./App.scss";
import TrelloActionButton from "./components/TrelloActionButton/TrelloActionButton";
import { useEffect } from "react";
import { useActions } from "./hooks/useActions";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function App() {
  const lists = useSelector((state) => state.lists.lists);
  const cards = useSelector((state) => state.cards.cards);

  const { getListsAC, getCardsAC, sort } = useActions();

  useEffect(() => {
    getListsAC();
    getCardsAC();
  }, []);

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    console.log("onDragEnd:source.droppableId", source.droppableId);
    console.log("onDragEnd:destination.droppableId", destination.droppableId);
    console.log("onDragEnd:source.index", source.index);
    console.log("onDragEnd:destination.index", destination.index);
    console.log("onDragEnd:draggableId", draggableId);
    console.log("onDragEnd:type", type);
    sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId,
      type
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="lists" direction="horizontal" type="list">
        {(provided) => {
          return (
            <div
              className="listsContainer"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {lists.map((list, index) => (
                <TrelloList
                  key={list._id}
                  title={list.title}
                  cards={cards}
                  listId={list._id}
                  index={index}
                />
              ))}
              {provided.placeholder}
              <TrelloActionButton list />
            </div>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
}

export default App;
