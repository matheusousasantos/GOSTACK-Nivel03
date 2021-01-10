import React, { createContext, useCallback, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

import ToastContainer from "../components/ToastContainer";

export interface ToastMessage {
  id: string;
  type?: "success" | "error" | "info";
  title: string;
  description: string;
}

interface ToastContentData {
  addToast(message: Omit<ToastMessage, "id">): void;
  removeToast(id: string): void;
}

const ToastContext = createContext<ToastContentData>({} as ToastContentData);

export const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessage, "id">) => {
      const id = uuid();
      const toast = {
        id,
        type,
        title,
        description,
      };
      setMessages((oldMessages) => [...oldMessages, toast]);
    },
    []
  );

  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
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
