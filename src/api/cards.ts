import Request from "@/api/base/request";
import type {
  UpdateCardProps,
  NewCardProps,
  CardsProps,
  UpdateCardCheckItem,
  UpdateCardCheckList,
} from "@/interfaces/cards";
import { CommentProps, NewCommentProps } from "@/interfaces/comments";

// 取得單張卡片
export const getCardApi = (cardId: string) =>
  Request.get<any, PrometheusResponse<CardsProps>>(`/cards/${cardId}`);

// 新增
export const newCardApi = (data: NewCardProps) =>
  Request.post<any, PrometheusResponse<CardsProps>>("/cards", data);

// 更新卡片標題、描述、位置、封存
export const updateCardApi = (data: UpdateCardProps) =>
  Request.put<any, PrometheusResponse<CardsProps>>(
    `/cards/${data.cardId}`,
    data
  );

// 更新checkItem
export const updateCheckItemApi = (data: UpdateCardCheckItem) =>
  data.checklistIdOld
    ? Request.put(
        `/cards/${data.cardId}/checklist/${data.checklistIdOld}/checkItem/${data.checkItemId}`,
        data
      )
    : Request.put(
        `/cards/${data.cardId}/checklist/${data.checklistId}/checkItem/${data.checkItemId}`,
        data
      );

// 更新checkList
export const updateChecklistApi = (data: UpdateCardCheckList) =>
  Request.put(`/cards/${data.cardId}/checklist/${data.checklistId}`, data);

// 新增卡片評論
export const newCardCommentApi = (data: NewCommentProps) =>
  Request.post<any, PrometheusResponse<CommentProps>>(
    `/cards/${data.cardId}/comments`,
    data
  );

// 複製單一卡片
export const postCloneCardApi = (data: {
  sourceCardId: string;
  boardId: string;
  listId: string;
  name: string;
  position: string;
}) =>
  Request.post<any, PrometheusResponse<CardsProps>>(`/cards/cloneById`, {
    ...data,
  });
