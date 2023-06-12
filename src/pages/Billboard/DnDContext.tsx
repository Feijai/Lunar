import React, { useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { cloneDeep } from "lodash";
import AddList from "@/components/AddList";
import TrelloCard from "@/components/TrelloCard";
import { useAppDispatch, useAppSelector } from "@/hooks";
import useWebSocket from "@/hooks/useWebSocket";
import { selectBoard, setBoardList } from "@/redux/boardSlice";
import { getSocketChange, handleOnDragEnd } from "@/utils/cardFunc";
import { BillboardStyled } from "./style";

const DnDContext: React.FC = () => {
  const dispatch = useAppDispatch();
  const board = useAppSelector(selectBoard);
  const dndCardList = cloneDeep(board.list);

  const { data: socketEvent, sendMessage } = useWebSocket(
    board._id,
    async (_: string) => {}
  );

  useEffect(() => {
    if (socketEvent) {
      const resultList = getSocketChange(dndCardList, socketEvent);
      dispatch(setBoardList(resultList));
    }
  }, [socketEvent]);

  useEffect(() => {
    if (board.list) {
      sendMessage({ type: "subscribe", boardId: board._id });
    }
    return () => sendMessage({ type: "unsubscribe", boardId: board._id });
  }, [board.list]);

  return (
    <DragDropContext
      onDragEnd={(result) => {
        const resultList = handleOnDragEnd(result, dndCardList);
        if (resultList) {
          dispatch(setBoardList(resultList));
        }
      }}
    >
      <Droppable
        droppableId="board"
        type="COLUMN"
        direction="horizontal"
        ignoreContainerClipping={false}
        isCombineEnabled={false}
      >
        {(provided) => (
          <BillboardStyled {...provided.droppableProps} ref={provided.innerRef}>
            {dndCardList
              .sort((a, b) => +a.position - +b.position)
              .map((ele, index) => (
                <TrelloCard
                  key={ele.id}
                  index={index}
                  quotes={ele}
                  isScrollable={true}
                  isCombineEnabled={false}
                  useClone={undefined}
                />
              ))}
            {provided.placeholder}
            <AddList />
          </BillboardStyled>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DnDContext;
