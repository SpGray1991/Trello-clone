import TrelloList from "../components/TrelloList/TrelloList";
import { useSelector } from "react-redux";
import "./TrelloBoard.scss";
import TrelloActionButton from "../components/TrelloActionButton/TrelloActionButton";
import { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function TrelloBoard() {
  const lists = useSelector((state) => state.lists.lists);
  const cards = useSelector((state) => state.cards.cards);

  const { getListsAC, getCardsAC, editListPositionAC, editCardPositionAC } =
    useActions();

  useEffect(() => {
    getListsAC();
    getCardsAC();
  }, []);

  const onDragEnd = (result) => {
    const { destination, source, type } = result;

    if (!destination) {
      return;
    }

    if (type === "list") {
      editListPositionAC(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index
      );
    }

    if (type === "card") {
      if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      ) {
        return;
      }

      editCardPositionAC(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index
      );
    }
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
                  indexList={index}
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

export default TrelloBoard;
