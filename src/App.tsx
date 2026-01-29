import { useEffect, useState, useRef } from "react";
import "./App.css";
import { ConfigProvider, theme } from "antd";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <div className="app">
      <ConfigProvider
        theme={{
          algorithm: theme.defaultAlgorithm, // light theme
          token: {
            colorPrimary: "#1677ff", // your brand color
            borderRadius: 6,
          },
        }}
      >
        <AppRoutes />
      </ConfigProvider>
    </div>
  );
};

export default App;
