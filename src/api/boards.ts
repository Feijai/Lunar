import Request from "@/api/base/request";
import type {
  AddBoardsMembers,
  BoardsProps,
  NewBoardsProps,
} from "@/interfaces/boards";

// 新增boards
export const newBoardApi = (data: NewBoardsProps) => {
  return Request.post<any, PrometheusResponse<BoardsProps>>(`/boards`, {
    ...data,
  });
};

// 刪除boards
export const deleteBoardApi = (id: string) =>
  Request.delete<any, PrometheusResponse<BoardsProps>>(`/boards/${id}`);

// 取得單一看板, 取得所有列表
export const getBoardApi = (id: string) =>
  Request.get<any, PrometheusResponse<BoardsProps>>(`/boards/${id}`);

// 刪除Boards Member
export const deleteBoardMemberApi = (boardId: string, memberId: string) =>
  Request.delete<any, PrometheusResponse<BoardsProps>>(
    `/${boardId}/members/${memberId}`
  );

// 複製單一看板
export const postCloneBoardApi = (data: {
  sourceBoardId: string;
  organizationId: string;
  name: string;
}) =>
  Request.post<any, PrometheusResponse<BoardsProps>>(`/boards/cloneById`, {
    ...data,
  });

// 新增看板成員
export const addBoardMembersApi = (data: AddBoardsMembers) => {
  return Request.post<any, PrometheusResponse<BoardsProps>>(
    `/boards/${data.boardId}/members`,
    data
  );
};

// 更新看板
export const updateBoardApi = (data: {
  boardId: string;
  name?: string;
  organizationId?: string;
  permission?: string;
  closed?: boolean;
  image?: string;
}) => {
  return Request.put<any, PrometheusResponse<BoardsProps>>(
    `/boards/${data.boardId}`,
    data
  );
};
