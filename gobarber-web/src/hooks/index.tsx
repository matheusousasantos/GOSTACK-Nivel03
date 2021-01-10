import React from "react";

import { AuthProvider } from "./Auth";
import { ToastProvider } from "./Toast";

import ToastContainer from "../components/ToastContainer";

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>{children}</ToastProvider>
    <ToastContainer />
  </AuthProvider>
);

export default AppProvider;
