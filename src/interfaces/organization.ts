import { BoardsProps } from "./boards";

export interface OrganizationProps {
  _id: string;
  name: string;
  permission: string;
  member: OrganizationMemberProps[];
  createdAt: string;
  updatedAt: string;
  board: BoardsProps[];
  id: string;
}

export interface OrganizationMemberProps {
  role: string;
  userId: {
    _id: string
    name: string
    avatar: string
  };
}

export interface NewOrganizationFormProps {
  name: string;
}
