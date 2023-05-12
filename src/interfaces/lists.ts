import { CardsProps } from "./cards";

export interface ListsProps {
  _id: string;
  name: string;
  position: string;
  boardId: string;
  card: CardsProps[];
  id: string;
}

export interface UpdateListProps {
  name?: string;
  listId: string;
  position: string;
  closed: boolean;
  boardId?: string;
}

export interface AddListProps {
  cardList: ListsProps[];
  boardId: string;
  callApi: Function;
}

export interface NewListProps {
  name: string;
  boardId: string;
  position: string;
}