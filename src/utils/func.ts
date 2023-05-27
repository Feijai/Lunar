import type { OrganizationProps } from "@/interfaces/organization";
import type { MenuProps } from "antd";
import type { RcFile } from "antd/es/upload";
import { nextPosition } from "./cardFunc";

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

export const getBase64 = async (file: RcFile) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);

  await new Promise((resolve) => (reader.onload = resolve));

  return `${reader.result}`;
};

export const getCloneCardOptions = (organization: OrganizationProps[]) => {
  const options = organization
    .filter(({ board }) => {
      return board.length && board.flatMap(({ list }) => list).length;
    })
    .map(({ id, name, board }) => ({
      value: id,
      label: name,
      children: board
        .filter(({ list }) => list.length)
        .map(({ id, name, list }) => ({
          value: id,
          label: name,
          children: list.map(({ id, name, card }) => ({
            value: id,
            label: name,
            children: [
              ...card.map((_, index, array) => ({
                value: nextPosition(array, index),
                label: index,
              })),
              {
                value: nextPosition(card, card.length),
                label: card.length,
              },
            ],
          })),
        })),
    }));

  return options;
};
