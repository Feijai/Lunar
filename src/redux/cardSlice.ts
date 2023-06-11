import { deleteAttachment, newAttachment } from "@/api/attachment";
import {
  addCardLabelApi,
  deleteCardLabelApi,
  addCardMemberApi,
  deleteCardDateApi,
  getCardApi,
  newCardCommentApi,
  newCardDateApi,
  postCloneCardApi,
  updateCardApi,
  updateCardDateApi,
  updateCardCommentApi,
  deleteCardCommentApi,
} from "@/api/cards";
import { newImageFileUrl } from "@/api/upload";
import {
  CloneCardProps,
  NewCardDateProps,
  UpdateCardDateProps,
  UpdateCardProps,
  AddCardMemberProps,
} from "@/interfaces/cards";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./store";
import {
  DeleteCommentProps,
  NewCommentProps,
  UpdateCommentProps,
} from "@/interfaces/comments";
import { CardLabelsProps } from "@/interfaces/labels";

export const getCardAction = createAsyncThunk(
  "card/updateCard",
  async (cardId: string) => await getCardApi(cardId)
);

export const updateCardAction = createAsyncThunk(
  "card/updateCard",
  async (data: UpdateCardProps) => await updateCardApi(data)
);

export const addCardMemberAction = createAsyncThunk(
  "card/updateCard",
  async (data: AddCardMemberProps) => await addCardMemberApi(data)
);

export const addCardLabelAction = createAsyncThunk(
  "card/updateCard",
  async (data: CardLabelsProps) => await addCardLabelApi(data)
);

export const deleteCardLabelAction = createAsyncThunk(
  "card/updateCard",
  async (data: CardLabelsProps) => await deleteCardLabelApi(data)
);

export const newAttachmentAction = createAsyncThunk(
  "card/newAttachment",
  async (data: { file: Blob; cardId: string; filename: string }) => {
    const { result } = await newImageFileUrl(data.file);
    return await newAttachment({
      cardId: data.cardId,
      filename: data.filename,
      dirname: result.link,
    });
  }
);

export const deleteAttachmentAction = createAsyncThunk(
  "card/deleteAttachment",
  async (data: { cardId: string; attachmentId: string }) =>
    await deleteAttachment(data)
);

export const newCardCommentAction = createAsyncThunk(
  "card/newCardComment",
  async (data: NewCommentProps) => await newCardCommentApi(data)
);

export const updateCardCommentAction = createAsyncThunk(
  "card/updateComment",
  async (data: UpdateCommentProps) => await updateCardCommentApi(data)
);

export const deleteCardCommentAction = createAsyncThunk(
  "card/deleteComment",
  async (data: DeleteCommentProps) => await deleteCardCommentApi(data)
);

export const newCardDateAction = createAsyncThunk(
  "card/updateCardDate",
  async (data: NewCardDateProps) => await newCardDateApi(data)
);

export const updateCardDateAction = createAsyncThunk(
  "card/updateCardDate",
  async (data: UpdateCardDateProps) => await updateCardDateApi(data)
);

export const deleteCardDateAction = createAsyncThunk(
  "card/deleteCardDate",
  async (cardId: string) => await deleteCardDateApi(cardId)
);

export const cloneCardAction = createAsyncThunk(
  "card/cloneCard",
  async (data: CloneCardProps) => await postCloneCardApi(data)
);

export const moveCardAction = createAsyncThunk(
  "card/moveCard",
  async (data: UpdateCardProps) => await updateCardApi(data)
);

export const selectCardById = (cardId?: string) => (state: RootState) =>
  state.board.board.list
    .flatMap(({ card }) => card)
    .find(({ _id }) => _id === cardId);