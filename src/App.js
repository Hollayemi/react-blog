import React from "react";
import MyRouter from "./Router/myRouter";
import { BrowserRouter } from "react-router-dom";

import {AuthProvider} from './useContext/authContext'
function App() {
  return (
      <AuthProvider>
        <BrowserRouter>
          <MyRouter />
        </BrowserRouter>
      </AuthProvider>
  );
}

export default App;
