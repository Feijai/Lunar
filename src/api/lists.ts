import Request from "@/api/base/request";
import type {
  UpdateListProps,
  NewListProps,
  ListsProps,
  MoveListProps,
  CloneListProps,
} from "@/interfaces/lists";

// 新增list
export const newListApi = (data: NewListProps) =>
  Request.post<any, PrometheusResponse<ListsProps>>("/lists", data);

// 更新list
export const updateListApi = (data: UpdateListProps) =>
  Request.put<any, PrometheusResponse<ListsProps>>(
    `/lists/${data.listId}`,
    data
  );

// 封存列表所有卡片
export const closeListAllCardsApi = (listId: string) =>
  Request.put<any, PrometheusResponse<ListsProps>>(
    `/lists/${listId}/archiveAllCards`
  );

// 移動列表
export const moveListApi = (data: MoveListProps) =>
  Request.put<any, PrometheusResponse<ListsProps>>(
    `/lists/${data.listId}/move`,
    data
  );

// 複製列表
export const cloneListApi = (data: CloneListProps) =>
  Request.post<any, PrometheusResponse<ListsProps>>(`/lists/cloneById`, data);
