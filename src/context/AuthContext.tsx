import { createContext, useContext, useState, ReactNode } from "react";

// Contextが提供する値の型（ログイン状態と処理関数）
type AuthContextType = {
  isAuthenticated: boolean; // ログイン中かどうか
  login: () => void;        // ログイン処理
  logout: () => void;       // ログアウト処理
};

// Context本体を作成（最初は未定義にしておく）
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// アプリ全体にログイン状態を提供するProviderコンポーネント
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // ログイン状態を保持（初期値はlocalStorageから取得）
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });

  // ログイン処理：状態更新 + localStorageに保存
  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  // ログアウト処理：状態初期化 + localStorageから削除
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  // コンテキストの値を子要素に提供
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// コンテキストを使うための専用フック
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    // Providerで囲まれていない場所で呼び出したらエラーにする
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
