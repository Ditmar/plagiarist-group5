import Theme from "./theme/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./components/DashboardComponent/Dashboard";
import Uploader from "./components/UploaderComponent/Uploader";
import LoaderComponent from "./components/LoaderComponent";
import LoaderSpinnerContextProvider from "./context/LoaderSpinnerContextProvider";
import { io } from "socket.io-client";
import { useEffect } from "react";
import socketIoEndpoint from "./async/services/socketIO";

function App() {
  const items = [
    {
      to: "/",
      name: "Home",
    },
    {
      to: "/searchgiffs",
      name: "Search Memes",
    },
    {
      to: "/login",
      name: "Login",
    },
  ];

  return (
    <Theme>
      <Uploader />
    </Theme>
  );
}

export default App;
