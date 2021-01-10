import React, { createContext, useCallback, useContext } from "react";

interface ToastContentData {
  addToast(): void;
  removeToast(): void;
}

const ToastContext = createContext<ToastContentData>({} as ToastContentData);

export const ToastProvider: React.FC = ({ children }) => {
  const addToast = useCallback(() => {
    console.log("addToast");
  }, []);

  const removeToast = useCallback(() => {
    console.log("removeToast");
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export function useToast(): ToastContentData {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be use within a ToastProvider");
  }
  return context;
}
