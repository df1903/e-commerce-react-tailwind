// Core
import { FC } from "react";
import { BrowserRouter } from "react-router-dom";

// Routes
import AppRouter from "../Routes/Index";

// Styles
import "../../App.css";

const App: FC = () => (
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);

export default App;
