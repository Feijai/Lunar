import React, { useState } from "react";
import { Divider, Menu, Spin } from "antd";
import { useListsContext } from "@/context/ListsContext";
import { useAppDispatch } from "@/hooks";
import { closeListAction } from "@/redux/listSlice";

const ActionContent: React.FC<{
  listId: string;
}> = ({ listId }) => {
  const dispatch = useAppDispatch();
  const { setShowAddCard, setPopoverState } = useListsContext();
  const [spinning, setSpinning] = useState(false);

  return (
    <Spin spinning={spinning}>
      <Menu
        className="popoverList"
        selectedKeys={[]}
        items={[
          {
            key: "newCard",
            label: "新增卡片",
            onClick: () => {
              setShowAddCard(true);
              setPopoverState("NONE");
            },
          },
          { key: "copyCard", label: "複製列表" },
          { key: "moveCard", label: "移動列表" },
        ]}
      />
      <Divider style={{ margin: "8px 0" }} />
      <Menu
        className="popoverList"
        selectedKeys={[]}
        items={[
          { key: "moveCards", label: "移動這個列表裡的所有卡片" },
          {
            key: "keepCards",
            label: "封存這個列表裡的所有卡片",
            onClick: () => setPopoverState("CLOSED"),
          },
        ]}
      />
      <Divider style={{ margin: "8px 0" }} />
      <Menu
        className="popoverList"
        selectedKeys={[]}
        items={[
          {
            key: "keepList",
            label: "封存這個列表",
            onClick: async () => {
              setSpinning(true);
              try {
                await dispatch(closeListAction(listId));
              } catch (error) {}
              setSpinning(false);
              setPopoverState("NONE");
            },
          },
        ]}
      />
    </Spin>
  );
};

export default ActionContent;
