// error message
export const errorMessage: { [x: number]: string } = {
  100: "系統錯誤、非預期錯誤",
  101: "IP 驗證錯誤",
  102: "您無此操作的權限，請聯絡系統管理員",
  103: "白名單驗證失敗",
  104: "風險等級不足",
  105: "密碼過期(彈窗修改密碼)",

  200: "DB資料錯誤",
  201: "DB資料新增失敗",
  202: "DB資料修改失敗",
  203: "DB資料刪除失敗",
  204: "Redis資料錯誤",

  300: "輸入參數錯誤",
  301: "資料不存在。",
  302: "狀態未停用/項目仍有其他功能使用中，無法允許刪除。",
  303: "資料儲存成功，Socket發送失敗",
  304: "操作請求過於頻繁，請稍後再試。",
  305: "項目仍有其他功能使用中，無法允許停用。",
  400: "驗證錯誤/驗證已失效，請重新登入驗證",
  401: "Token為黑名單或已過期",
  402: "SSO認證異常",
  403: "EMS憑證錯誤",
  404: "SSO認證無效",
  405: "未帶入Token驗證，請重新登入驗證",
  406: "您的帳號已被凍結，請聯絡管理員",
  500: "其他錯誤",
};

export const POSITION_GAP = 65535;

export const colorList = [
  { color: "#FBF8CC" },
  { color: "#FDE4CF" },
  { color: "#FFCFD2" },
  { color: "#F1C0E8" },
  { color: "#CFBAF0" },
  { color: "#A3C4F3" },
  { color: "#90DBF4" },
  { color: "#8EECF5" },
  { color: "#98F5E1" },
];