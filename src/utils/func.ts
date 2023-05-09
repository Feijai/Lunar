import { CardProps } from "@/interfaces/trelloCard";
import { DraggableLocation } from "react-beautiful-dnd";

import type { MenuProps } from "antd";

export const reorder = (list: any[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const getNewData = (
  columns: CardProps[],
  title: string,
  newArr: CardProps[]
) => {
  let useColumn = [...columns];
  const useIndex = columns.findIndex((ele) => ele.title === title);
  if (useIndex !== -1) {
    const useArr = { ...useColumn[useIndex], children: newArr };
    useColumn.splice(useIndex, 1, useArr);
  }
  return useColumn;
};

const getColumn = (columns: CardProps[], title: string) => {
  return columns.find((column) => column.title === title) || { children: [] };
};

export const reorderQuoteMap = (
  columns: CardProps[],
  source: DraggableLocation,
  destination: DraggableLocation
) => {
  const current = [...getColumn(columns, source.droppableId).children];
  const next = [...getColumn(columns, destination.droppableId).children];

  // 同List
  if (source.droppableId === destination.droppableId) {
    const reordered = reorder(current, source.index, destination.index);
    return getNewData(columns, destination.droppableId, reordered);
  }

  // 不同 List
  const target = current[source.index];
  current.splice(source.index, 1);
  next.splice(destination.index, 0, target);

  return getNewData(
    getNewData(columns, source.droppableId, current),
    destination.droppableId,
    next
  );
};

type MenuItem = Required<MenuProps>["items"][number];

export const getMenuItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
};
