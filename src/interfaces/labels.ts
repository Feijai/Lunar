// 取得標籤
export interface LabelsProps {
  _id: string;
  name: string;
  color: string;
  boardId: string;
}

// 新增標籤
export interface NewLabelsProps {
  boardId: string;
  name: string;
  color: string;
}

export interface UpdateLabelsProps {
  boardId: string;
  labelId: string;
  name: string;
  color: string;
}

export interface DateLabelsProps {
  boardId: string;
  labelId: string;
}

// 增加卡片標籤 & 移除卡片標籤
export interface CardLabelsProps {
  cardId: string;
  labelId: string;
}
