import React, { ReactNode, createContext, useState } from "react";
import { CardsProps } from "@/interfaces/cards";

interface CardModalProviderProps {
  children: ReactNode;
}

export interface CardModalContextValue {
  cardData: CardsProps;
  setCardData: React.Dispatch<React.SetStateAction<CardsProps>>;
}

const CardModalContext = createContext<CardModalContextValue>({
  cardData: {
    name: "",
    closed: false,
    position: "",
    listId: "",
    label: [],
    _id: "",
    member: [],
    createdAt: "",
    updatedAt: "",
    id: "",
    description: "",
    checklist: [],
    comment: [],
    attachment: [],
    date: null,
  },
  setCardData: () => {},
});

export const CardModalProvider: React.FC<CardModalProviderProps> = ({
  children,
}) => {
  const [cardData, setCardData] = useState<CardsProps>({
    name: "",
    closed: false,
    position: "",
    listId: "",
    label: [],
    _id: "",
    member: [],
    createdAt: "",
    updatedAt: "",
    id: "",
    description: "",
    checklist: [],
    comment: [],
    attachment: [],
    date: null,
  });

  return (
    <CardModalContext.Provider value={{ cardData, setCardData }}>
      {children}
    </CardModalContext.Provider>
  );
};

export const useCardModalContext = () => {
  return React.useContext(CardModalContext) as CardModalContextValue;
};
