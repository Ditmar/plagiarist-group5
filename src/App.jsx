import Theme from "./theme/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./components/DashboardComponent/Dashboard";
import Uploader from "./components/UploaderComponent/Uploader";
import LoaderComponent from "./components/LoaderComponent";
import LoaderSpinnerContextProvider from "./context/LoaderSpinnerContextProvider";
import { io } from "socket.io-client";
import { useEffect } from "react";
import socketIoEndpoint from "./async/services/socketI
import Theme from './theme/theme';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './components/DashboardComponent/Dashboard';
import UploadComponent from './components/UploadComponent';
import LoaderComponent from './components/LoaderComponent';
import LoaderSpinnerContextProvider from './context/LoaderSpinnerContextProvider';
import LastDocument from './components/LastDocuments/LastDocument';
/*import { io } from "socket.io-client";
import { useEffect } from 'react';
import socketIoEndpoint from './async/services/socketIO';
import Register from './pages/register';

const setUpSocketIO = () => {
    //socket = io(uri);
    // socket.on('serverresponse', (room) => {
    //   console.log(room);
    //   socket.emit('joinroom', room);
    // })
}*/
function App() {

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
=======
    
      <Theme>
        <LoaderSpinnerContextProvider>
          <BrowserRouter>
            <LoaderComponent />
            <Routes>
              <Route path="/" element={<>
                <Dashboard> 
                  <p>content </p> 
                </Dashboard>
              </>}/>
              <Route path="/upload" element={<>
                <Dashboard> 
                  <UploadComponent />
                </Dashboard>
              </> } />
              <Route path="/lastdocument" element={<>
                <Dashboard> 
                  <LastDocument />
                </Dashboard>
              </> } />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register/>} />
            </Routes>
          </BrowserRouter>
        </LoaderSpinnerContextProvider>
      </Theme>

  );
}

export default App;
