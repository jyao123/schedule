// 共用資料設定 / Shared data settings
// 1) 到 Firebase 建立專案後，把「firebaseConfig」裡的值貼到下面，取代引號裡的 PASTE_...。
// 2) 存檔。網站重新整理後，右上角就會出現「用 Google 登入」。
window.FIREBASE_CONFIG = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_PROJECT_ID.appspot.com",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID"
};
// 同一個網站要分開管理多份排程時，可以改這個名稱。
window.SCHEDULE_ID = "main";
